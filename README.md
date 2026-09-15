# Contrary Comics

Stripwinkel — indie, heruitgaven en exclusieve edities. Gebouwd met **React**, **TanStack Start** en **Tailwind CSS**.

## Op je pc

1. Installeer [Git](https://git-scm.com/download/win) en [Node.js 22 LTS](https://nodejs.org/) (niet alleen “Node”, het volledige LTS-pakket).
2. Open **PowerShell** in de map waar je het project wilt:

```powershell
git clone https://github.com/emdalo/contrary-comics.git
cd contrary-comics
npm install
npm run dev
```

3. Open [http://localhost:8080](http://localhost:8080) in je browser.

Laat het venster open zolang je de shop bekijkt. Stoppen: `Ctrl+C`.

### `spawn vite ENOENT`

Dat betekent: Node vindt Vite niet. Bijna altijd ontbreekt `npm install`, of je zit in de verkeerde map.

```powershell
cd contrary-comics
npm install
npm run dev
```

Geen Git? Download de ZIP op GitHub (**Code → Download ZIP**), pak uit, `cd` naar die map, daarna dezelfde twee `npm`-commando’s.

## Scripts

| Commando | Wat het doet |
|---|---|
| `npm run dev` | Ontwikkelserver op poort 8080 |
| `npm run build` | Productie-build |
| `npm run typecheck` | TypeScript-check |

## Stack

- TanStack Start (routes in `src/routes/`)
- React + Tailwind v4
- Winkelwagen en bestellingen in `localStorage` (demo, geen echte betaling)

## GitHub Desktop

Clone repository → `emdalo/contrary-comics` → daarna in die map `npm install` en `npm run dev`.
