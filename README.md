# Dynasty

Dynasty is a personal digital archive for projects, creative work, growth journeys, photographs, and films. The site presents a life in progress through an editorial, magazine-inspired experience rather than a conventional portfolio grid.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4 with custom global CSS
- Lucide icons
- Netlify deployment through the TanStack Start Vite plugin

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The Vite server runs on `http://localhost:3000`. For local Netlify emulation, use:

```bash
netlify dev --port 8889
```

## Customize

The homepage content lives in `src/routes/index.tsx`. Project entries are defined in the `projects` array near the top of that file. Global colors, typography, layouts, and responsive behavior live in `src/styles.css`.

The memory gallery currently uses art-directed CSS placeholders so the site remains complete without personal media. Replace those panels with real images or video posters when personal assets are available.
