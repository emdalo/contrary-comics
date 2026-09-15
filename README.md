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

3. Open het adres dat in de terminal staat:
   - **Windows:** [http://localhost:5173](http://localhost:5173)
   - anders: [http://localhost:8080](http://localhost:8080)

Laat het venster open zolang je de shop bekijkt. Stoppen: `Ctrl+C`.

### `listen EACCES: permission denied 0.0.0.0:8080`

Windows reserveert poort 8080 vaak (Hyper-V). `npm run dev` gebruikt daarom op Windows automatisch **localhost:5173**. Haal de laatste versie op:

```powershell
git pull
npm run dev
```

Zonder pull, eenmalig:

```powershell
npx vite dev --host 127.0.0.1 --port 5173
```

### `spawn vite ENOENT`

Node vindt Vite niet. Meestal ontbreekt `npm install`, of je zit in de verkeerde map.

```powershell
cd contrary-comics
npm install
npm run dev
```

Geen Git? Download de ZIP op GitHub (**Code → Download ZIP**), pak uit, `cd` naar die map, daarna `npm install` en `npm run dev`.

## Scripts

| Commando | Wat het doet |
|---|---|
| `npm run dev` | Ontwikkelserver (Windows: 5173, anders 8080) |
| `npm run build` | Productie-build |
| `npm run typecheck` | TypeScript-check |

## Stack

- TanStack Start (routes in `src/routes/`)
- React + Tailwind v4
- Winkelwagen en bestellingen in `localStorage` (demo, geen echte betaling)

## GitHub Desktop

Clone repository → `emdalo/contrary-comics` → daarna in die map `npm install` en `npm run dev`.
