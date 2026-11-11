# Anas Tag — Portfolio

Personal portfolio of **Anas Tag**, a Full-Stack and Backend Software Engineer based in Longueuil, Québec, Canada.

The site is built to look and feel like VS Code: pages open as editor tabs, there is a file explorer, an activity bar, a status bar, an interactive terminal, and switchable color themes.

## Credits

This project is a fork of [DiegoBravoH/DiegoBravoH.github.io](https://github.com/DiegoBravoH/DiegoBravoH.github.io) by Diego Bravo, released under the MIT License. The layout, VS Code–style components and themes come from that template; the content and data have been adapted for this profile.

## Pages

| Tab             | Route       | Content                                                |
| --------------- | ----------- | ------------------------------------------------------ |
| `home.jsx`      | `/`         | Introduction, experience, selected products, and skills |
| `resume.html`   | `/resume`   | Résumé viewer with PDF download                        |
| `contact.yml`   | `/contact`  | Email, LinkedIn, and GitHub                            |
| `projects.py`   | `/projects` | Selected products                                      |
| `github.md`     | `/github`   | Live repositories and contribution calendar            |

A settings page (`/settings`) lets visitors switch between eight editor themes.

## Tech stack

- [Next.js](https://nextjs.org/) 12 and React 17
- CSS Modules with theme variables
- [react-pdf](https://github.com/wojtekmaj/react-pdf) for the résumé viewer
- [react-github-calendar](https://github.com/grubersjoe/react-github-calendar) and the GitHub REST API
- [tsParticles](https://particles.js.org/) for the home page background

## Project structure

```
components/   UI components (titlebar, sidebar, explorer, tabs, terminal, cards)
context/      Terminal open/close state
data/         Site content as JSON (experience and featured projects)
lib/          Helpers (asset path prefixing for the basePath)
pages/        One file per route
public/       Images, icons, résumé and theme previews
styles/       CSS Modules and theme definitions
```

## Editing content

| What               | Where                                                            |
| ------------------ | ---------------------------------------------------------------- |
| Experience         | `data/experience.json`                                           |
| Projects           | `data/featured-projects.json`                                    |
| Photo / résumé     | `public/anas-tag.png`, `public/Anas_Tag_Full_Stack_Software_Engineer.pdf` |
| Product images     | `public/projects/`                                                        |
| Contact links      | `pages/contact.jsx`, `components/Bottombar.jsx`                           |

The GitHub page uses the `Taganas2002` account by default. Set `NEXT_PUBLIC_GITHUB_USERNAME` to override it.

The résumé PDF is `public/Anas_Tag_Full_Stack_Software_Engineer.pdf`. The profile photo is `public/anas-tag.png`.

## Running locally

Requires Node.js 22.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out (served under /portfolio)
```

## Deployment

The site is deployed to GitHub Pages from this repository at **https://taganas2002.github.io/portfolio/**.

The workflow in `.github/workflows/nextjs.yml` builds and publishes `./out` on every push to `main`.

Production builds use `basePath: '/portfolio'` (see `next.config.js`). Files in `public/` must be referenced through `lib/asset.js` (for example `asset('/anas-tag.png')`) so they get that prefix. `next/link` handles page links automatically. If the repository is renamed, update `basePath` in `next.config.js`.

## License

MIT. See [LICENSE](LICENSE).
