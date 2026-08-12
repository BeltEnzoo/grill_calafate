import { extractDriveFileId } from "@/lib/images";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

/**
 * Proxy de imágenes de Google Drive.
 * Drive no permite usar links /view como <img> directo.
 */
export async function GET(_req: Request, { params }: Params) {
  const { id: rawId } = await params;
  const id = extractDriveFileId(rawId) || rawId;

  if (!id || !/^[a-zA-Z0-9_-]+$/.test(id)) {
    return new Response("ID inválido", { status: 400 });
  }

  const candidates = [
    `https://drive.google.com/thumbnail?id=${id}&sz=w2000`,
    `https://lh3.googleusercontent.com/d/${id}=w2000`,
    `https://drive.google.com/uc?export=view&id=${id}`,
  ];

  for (const url of candidates) {
    try {
      const res = await fetch(url, {
        redirect: "follow",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; GrillCalafateBot/1.0; +https://grillcalafate.com)",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        },
        // Cache en el edge/runtime de Next cuando sea posible
        next: { revalidate: 3600 },
      });

      if (!res.ok) continue;

      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("text/html")) continue;
      if (!contentType.startsWith("image/") && !contentType.includes("octet-stream")) {
        continue;
      }

      const buffer = await res.arrayBuffer();
      if (buffer.byteLength < 500) continue;

      return new Response(buffer, {
        status: 200,
        headers: {
          "Content-Type": contentType.startsWith("image/")
            ? contentType
            : "image/jpeg",
          "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
      });
    } catch {
      // probar siguiente candidato
    }
  }

  return new Response("No se pudo obtener la imagen de Drive", { status: 502 });
}
