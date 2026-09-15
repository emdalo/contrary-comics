# Contrary Comics

Webshop gebouwd met **React**, **TanStack Start** en **Tailwind CSS**.

Live in Grok is de winkel nog **NOORD** (collectie, wagen, afrekenen). Deze repo is hetzelfde project, onder de naam Contrary Comics.

## Op je pc

1. Installeer [Git](https://git-scm.com/download/win) en [Node.js 22 LTS](https://nodejs.org/).
2. Open een terminal (PowerShell of Git Bash):

```bash
git clone https://github.com/emdalo/contrary-comics.git
cd contrary-comics
npm install
npm run dev
```

3. Open [http://localhost:8080](http://localhost:8080) in je browser.

## Scripts

| Commando | Wat het doet |
|---|---|
| `npm run dev` | Ontwikkelserver |
| `npm run build` | Productie-build |
| `npm run typecheck` | TypeScript-check |

## Stack

- TanStack Start (file-based routes in `src/routes/`)
- React + Tailwind v4
- Winkelwagen en bestellingen in `localStorage` (demo, geen echte betaling)

## GitHub Desktop

Als je geen terminal wilt: GitHub Desktop → **Clone repository** → `emdalo/contrary-comics` → daarna in die map `npm install` en `npm run dev` in een terminal.
