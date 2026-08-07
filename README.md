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

## Contenido editable

Todo el copy, CTAs, shows y rutas de imágenes viven en:

`src/content/site.ts`

## Imágenes

Colocá las fotos finales del cliente en `public/images/` respetando los nombres del content file (o actualizá las rutas).

Las imágenes actuales fueron extraídas del Manual de Identidad como base visual provisional.

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
