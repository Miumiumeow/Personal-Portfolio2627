# Portfolio

A simple personal portfolio built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com) v4. Light and dark mode follow the visitor's system setting.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Make it yours

- **Content:** edit `data/site.js` (name, intro, about, skills, projects, links, email).
- **Colors:** edit the CSS variables at the top of `app/globals.css`.
- **Font:** change the font in `app/layout.js` (any Google Font works with `next/font/google`).
- **Favicon:** replace `app/icon.svg` with your own icon.
- **Layout and sections:** edit the files in `components/` and reorder them in `app/page.js`.

## Project structure

```
app/
  layout.js        Root layout, font, SEO metadata
  page.js          Home page (assembles the sections)
  globals.css      Tailwind import and color tokens
  icon.svg         Favicon
components/        Header, Hero, About, Projects, Contact, Footer
data/site.js       All the content in one place
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave the default settings (Vercel detects Next.js automatically) and click **Deploy**.
4. After the first deploy, set `url` in `data/site.js` to your real domain so link previews work.

Every push to `main` will redeploy automatically.
