/**
 * Normaliza URLs de imagen que el cliente pega en el admin.
 * Links de Google Drive se sirven vía /api/media/drive/[id] (proxy).
 */

export function extractDriveFileId(url: string): string | null {
  const patterns = [
    /drive\.google\.com\/file\/d\/([^/?&#]+)/i,
    /drive\.google\.com\/open\?[^#]*[?&]id=([^&]+)/i,
    /drive\.google\.com\/uc\?[^#]*[?&]id=([^&]+)/i,
    /docs\.google\.com\/uc\?[^#]*[?&]id=([^&]+)/i,
    /\/api\/media\/drive\/([^/?&#]+)/i,
  ];

  for (const re of patterns) {
    const m = url.match(re);
    if (m?.[1]) return decodeURIComponent(m[1]);
  }
  return null;
}

/**
 * Convierte links de Drive a nuestra ruta proxy.
 * El archivo debe estar compartido: "Cualquier persona con el enlace".
 */
export function normalizeImageUrl(input: string): string {
  const raw = input.trim();
  if (!raw) return "/images/show-1.jpg";

  const driveId = extractDriveFileId(raw);
  if (driveId) {
    return `/api/media/drive/${driveId}`;
  }

  return raw;
}
