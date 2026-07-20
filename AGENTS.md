# Dynasty Project Guide

## Overview

Dynasty is a personal portfolio and life archive built with TanStack Start for Netlify. Its primary experience is a single editorial homepage that combines financial projects, artwork, self-development journeys, photographs, and video moments.

## Architecture

- `src/routes/__root.tsx` defines document metadata, font loading, and the application shell.
- `src/routes/index.tsx` contains the main Dynasty homepage, project data, filtering interaction, and archive sections.
- `src/styles.css` contains the visual system, responsive layouts, motion, texture, and component states.
- `src/routes/` also contains template-supported secondary routes for future expansion.
- `content/` and `content-collections.ts` provide type-safe Markdown infrastructure for future long-form entries.
- `public/` stores static media and icons.
- `netlify.toml` and `vite.config.ts` configure deployment and framework integrations.

## Conventions

- Use TypeScript and React function components.
- Keep route components in `src/routes/` and reusable UI in `src/components/`.
- Use PascalCase for components and camelCase for functions and local state.
- Use the `@/` alias for imports from `src/`.
- Prefer the existing CSS variables in `src/styles.css` when extending the color system.
- Preserve the editorial visual language: Italiana display type, Manrope body type, warm paper tones, wine, gold, and restrained motion.
- Maintain visible focus, hover, active, reduced-motion, and mobile states for new interactions.

## Content Decisions

- The project list is intentionally local static content because it is presentational starter copy, not user-created persistent data.
- The gallery uses CSS art placeholders until personal images and videos are supplied. Place real media in `public/` and reference it with root-relative paths.
- The homepage uses section anchors instead of route navigation to keep the first version intimate and story-led.

## Commands

- `npm run dev` starts Vite on port 3000.
- `netlify dev --port 8889` starts the project with Netlify emulation.
- `npm run build` creates the production build.

Do not commit generated build output such as `dist/`, `.netlify/`, or `.tanstack/`.
