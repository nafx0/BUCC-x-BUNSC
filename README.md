# BUNSC Website

Production-ready single-page website for the BRAC University Natural Sciences Club (BUNSC). Built as a fast, static React application with a modern component library and a themeable design system.

---

## Project Overview
- See the live preview https://bucc-x-bunsc.vercel.app/
### Purpose of the website

- Present BUNSC’s mission, advisors, and leadership information.
- Showcase events, publications/blog-style content, and a media gallery.
- Provide clear contact channels and social presence links.

### Target users

- Prospective members and students interested in BUNSC.
- University stakeholders (faculty, advisors, partners).
- Visitors looking for event highlights, publications, and media.

### Core features and functionality

- Multi-page navigation within a single-page app (SPA).
- Home page hero with introduction video (fullscreen + minimized “picture-in-picture” experience).
- Events listing with categories/status badges and representative images.
- Publications listing (blogs and magazines) backed by curated content in code.
- Media gallery with folder grouping and lightbox viewing.
- Contact page with mailto and social links.
- Dark/light theming (class-based) and responsive navigation.

---

## Tech Stack

### Frontend technologies

- Framework: React 18 + TypeScript
- Build tool: Vite 5
- Routing: React Router DOM
- Styling: Tailwind CSS (CSS variables + HSL token system)
- Component system: shadcn/ui patterns + Radix UI primitives
- Forms/validation utilities (available in dependencies): React Hook Form, Zod
- Icons: lucide-react
- UI feedback: Sonner + shadcn/ui Toaster
- Data fetching layer (available): @tanstack/react-query (QueryClient provided globally)

### Backend technologies

- Not included in this repository.
- The site currently runs as a static SPA; any dynamic features (forms, CMS, auth) would require an external backend.

