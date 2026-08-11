# Grill Calafate — Web Premium

Sitio oficial: restaurante, agencia de viajes y salón de eventos en El Calafate.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

## Desarrollo

```bash
cd web
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Admin de shows (Neon + panel)

1. Creá un proyecto en [Neon](https://neon.tech) y copiá la connection string.
2. Creá `web/.env.local`:

```
DATABASE_URL="postgresql://...@.../neondb?sslmode=require"
ADMIN_PASSWORD="tu-clave-segura"
ADMIN_SECRET="otra-cadena-random-larga"
```

3. En la carpeta `web`:

```
npx prisma db push
npm run db:seed
npm.cmd run dev
```

4. Entrá a **http://localhost:3000/admin** con la contraseña.

5. En Vercel: Settings → Environment Variables → las 3 keys → Redeploy.

Sin `DATABASE_URL`, la web usa `shows.json` y el admin avisa que falta Neon.

## Calendario de shows (Google Sheets) — opcional

Solo si no usás Neon. Ver `.env.example`.

## Contenido editable

- Textos generales: `src/content/site.ts`
- Shows (respaldo): `src/content/shows.json`

## Paleta (Manual de Marca)

| Token     | Hex       |
|-----------|-----------|
| Charcoal  | `#222121` |
| Slate     | `#628395` |
| Earth     | `#9E6240` |
| Cream     | `#F3F0EB` |
| Gold      | `#FFC857` |

## Contacto / WhatsApp

Actualizá teléfono, WhatsApp y email en `src/content/site.ts` → `brand`.
