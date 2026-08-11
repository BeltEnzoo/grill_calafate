import { prisma, hasDatabase } from "@/lib/db";
import {
  normalizeShow,
  parseShowsCsv,
  type ShowEvent,
  type ShowStatus,
} from "@/lib/shows";
import fallbackShows from "@/content/shows.json";

export type ShowsSource = "neon" | "google-sheets" | "fallback";

function sheetExportUrl(sheetId: string, gid: string) {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
}

async function getShowsFromNeon(): Promise<ShowEvent[] | null> {
  if (!hasDatabase()) return null;

  try {
    const rows = await prisma.show.findMany({
      orderBy: { date: "asc" },
    });

    return rows.map((row) =>
      normalizeShow({
        id: row.id,
        title: row.title,
        date: row.date,
        time: row.time,
        image: row.image,
        status: row.status as ShowStatus,
        description: row.description,
      }),
    );
  } catch (err) {
    console.error("[shows] Neon error:", err);
    return null;
  }
}

async function getShowsFromSheets(): Promise<ShowEvent[] | null> {
  const sheetId = process.env.GOOGLE_SHEET_ID?.trim();
  const gid = process.env.GOOGLE_SHEET_GID?.trim() || "0";
  const customUrl = process.env.GOOGLE_SHEET_CSV_URL?.trim();
  const url = customUrl || (sheetId ? sheetExportUrl(sheetId, gid) : null);
  if (!url) return null;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: { "User-Agent": "GrillCalafateWeb/1.0" },
    });
    if (!res.ok) throw new Error(`Sheets HTTP ${res.status}`);
    const events = parseShowsCsv(await res.text());
    return events.length ? events : null;
  } catch (err) {
    console.error("[shows] Sheets error:", err);
    return null;
  }
}

/**
 * Prioridad: Neon → Google Sheets (opcional) → shows.json
 */
export async function getShows(): Promise<{
  events: ShowEvent[];
  source: ShowsSource;
}> {
  const fromNeon = await getShowsFromNeon();
  if (fromNeon && fromNeon.length > 0) {
    return { events: fromNeon, source: "neon" };
  }

  const fromSheets = await getShowsFromSheets();
  if (fromSheets && fromSheets.length > 0) {
    return { events: fromSheets, source: "google-sheets" };
  }

  return {
    events: (fallbackShows as ShowEvent[]).map((e) => normalizeShow(e)),
    source: "fallback",
  };
}
