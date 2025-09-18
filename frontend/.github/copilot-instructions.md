# Copilot Instructions for Zomato-Gram Frontend

## Project Overview
- This is a React + Vite project for a food delivery platform frontend.
- The codebase uses Vite for fast development and HMR, with ESLint for code quality.
- Main entry: `src/main.jsx` renders the root `App` component.
- Routing is managed in `src/routes/AppRoutes.jsx`.

## Key Directories & Files
- `src/` — All source code. Contains:
  - `App.jsx` — Main application component.
  - `routes/AppRoutes.jsx` — Centralized route definitions and navigation logic.
  - `assets/` — Static assets (SVGs, images).
  - `App.css` — Global styles.
- `public/` — Static files served by Vite.
- `index.html` — Main HTML template.

## Routing Patterns
- User routes: `/user/register`, `/user/login`
- Food partner routes: `/food-partner/register`, `/food-partner/login`
- Define new routes in `src/routes/AppRoutes.jsx` and corresponding components in `src/`.

## Developer Workflows
- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint config in `eslint.config.js`)

## Conventions & Patterns
- Use functional React components and hooks.
- Centralize route logic in `AppRoutes.jsx`.
- Keep assets in `src/assets/`.
- Use CSS modules or global styles in `App.css`.
- Prefer named exports for components.

## External Integrations
- Vite plugins for React (see README for details).
- No backend/API integration code present in this repo.

## Example: Adding a New Route
1. Create a new component in `src/` (e.g., `UserProfile.jsx`).
2. Add the route to `AppRoutes.jsx`:
   ```jsx
   <Route path="/user/profile" element={<UserProfile />} />
   ```
3. Import the component at the top of `AppRoutes.jsx`.

## References
- See `README.md` for more details on setup and available routes.
- See `vite.config.js` and `eslint.config.js` for build and lint configuration.

---
For questions about project structure or conventions, review this file and the README before making changes.