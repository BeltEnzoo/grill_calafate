import { getShows } from "@/lib/get-shows";

export const dynamic = "force-dynamic";

export async function GET() {
  const { events, source } = await getShows();

  return Response.json(
    { events, source },
    {
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120",
      },
    },
  );
}
