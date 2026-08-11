export type ShowStatus = "hoy" | "proximo" | "agotado" | "disponible";

export type ShowEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  image: string;
  status: ShowStatus;
  description: string;
};

const VALID_STATUS = new Set<ShowStatus>([
  "hoy",
  "proximo",
  "agotado",
  "disponible",
]);

function todayKey(now = new Date()) {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Normaliza estado: si la fecha es hoy y no está agotado → "hoy" */
export function normalizeShow(raw: ShowEvent, now = new Date()): ShowEvent {
  const today = todayKey(now);
  let status = VALID_STATUS.has(raw.status) ? raw.status : "disponible";

  if (raw.date === today && status !== "agotado") {
    status = "hoy";
  } else if (status === "hoy" && raw.date !== today) {
    status = raw.date > today ? "proximo" : "disponible";
  }

  return { ...raw, status };
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  const pushCell = () => {
    row.push(cell.trim());
    cell = "";
  };
  const pushRow = () => {
    if (row.some((c) => c.length > 0)) rows.push(row);
    row = [];
  };

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      pushCell();
    } else if (ch === "\n") {
      pushCell();
      pushRow();
    } else if (ch === "\r") {
      // ignore
    } else {
      cell += ch;
    }
  }

  pushCell();
  pushRow();
  return rows;
}

function headerIndex(headers: string[], ...names: string[]) {
  const normalized = headers.map((h) =>
    h.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").trim(),
  );
  for (const name of names) {
    const i = normalized.indexOf(name);
    if (i >= 0) return i;
  }
  return -1;
}

export function parseShowsCsv(csv: string): ShowEvent[] {
  const rows = parseCsv(csv.replace(/^\uFEFF/, ""));
  if (rows.length < 2) return [];

  const headers = rows[0];
  const col = {
    id: headerIndex(headers, "id"),
    title: headerIndex(headers, "title", "titulo", "nombre"),
    date: headerIndex(headers, "date", "fecha"),
    time: headerIndex(headers, "time", "hora"),
    image: headerIndex(headers, "image", "imagen", "foto"),
    status: headerIndex(headers, "status", "estado"),
    description: headerIndex(headers, "description", "descripcion", "detalle"),
  };

  if (col.title < 0 || col.date < 0) {
    throw new Error(
      "La planilla debe tener al menos columnas title/titulo y date/fecha",
    );
  }

  const now = new Date();
  const events: ShowEvent[] = [];

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const title = r[col.title]?.trim();
    const date = r[col.date]?.trim();
    if (!title || !date) continue;

    const statusRaw = (col.status >= 0 ? r[col.status] : "disponible")
      .toLowerCase()
      .trim() as ShowStatus;

    const event = normalizeShow(
      {
        id: (col.id >= 0 && r[col.id]) || String(i),
        title,
        date,
        time: (col.time >= 0 ? r[col.time] : "21:00") || "21:00",
        image:
          (col.image >= 0 ? r[col.image] : "/images/show-1.jpg") ||
          "/images/show-1.jpg",
        status: statusRaw,
        description:
          (col.description >= 0 ? r[col.description] : "") || "",
      },
      now,
    );

    events.push(event);
  }

  return events.sort((a, b) => a.date.localeCompare(b.date));
}
