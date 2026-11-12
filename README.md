# Talos.io Portfolio

## Project overview

Talos.io is a portfolio for a design brand focused on cyberpunk, futuristic, and gaming brand identities. The visual direction is dark, cold, and minimal, with section labels such as `[ BRANDING // GAMING ]`. Use placeholder content and imagery until the owner supplies real material. Follow references in the `design` folder when available.

The planned portfolio includes Home, Work, a project case study, About, and Contact. It will feature six brand design projects and Nexus, a multithreaded HTTP server written in C++.

Use no emojis in the site's content or design.

## Owner's goals

The owner is a BSCS student working toward an international remote software career, with a design-engineering focus and an eventual 3D edge. The main goal is to become an effective AI-assisted engineer: able to understand, review, direct, modify, debug, and maintain generated software—not to become a fast typist or memorize every detail before progressing.

Use AI to accelerate boilerplate and cohesive, self-contained implementation. Keep changes manageable and explain meaningful chunks: what they do, important syntax and concepts, how the pieces connect, and why key decisions were made. Encourage inspection and useful experiments; predictions and small challenges are welcome when they help, but do not turn every task into a quiz or require manual coding exercises.

Be an honest technical mentor. Identify root causes when debugging, explain fixes, point out trade-offs and questionable practices, and do not silently remove existing behavior. Avoid overengineering, unnecessary theory, and unexplained code dumps. Adjust explanation depth as the owner gains familiarity.

## Technical and design constraints

- Start with plain HTML, CSS, and JavaScript. No site frameworks, libraries, or build tools.
- Use JavaScript ES modules (`import` / `export`) when JavaScript is introduced.
- Keep the site responsive and accessible: semantic HTML, useful image alt text, real buttons for actions, and visible keyboard focus.
- Animate only `transform` and `opacity`; respect `prefers-reduced-motion`.
- Keep implementation as simple as possible while maintaining clean, reusable code.
- The owner must explicitly approve any Git commit or push. Never commit or push without that approval.

## Running locally

Use a simple static HTTP server; no build step is needed. If Python is installed, run `py -m http.server 8000` from the project folder, then open `http://localhost:8000`. Later JavaScript ES modules should be tested through a local server rather than opened directly with a `file://` URL.

## Collaboration and continuity

This README is the durable project and learning context for any AI assistant continuing the work. Read it and `CLAUDE.md` before making project changes. Keep this file up to date when the project state, learning preferences, or important decisions change.

Make practical progress feature by feature. Do not pause for approval after every small edit; pause at meaningful review points or when a decision belongs to the owner. Never assume approval of a plan or folder structure is approval to implement every planned feature at once.

## Learning path

1. **HTML and CSS foundations:** Build the pages with semantic structure, shared styles, color/font variables, responsive layouts, and keyboard focus.
2. **Project data and Work grid:** Keep project data in one module, render cards from it, and add filters using state, rendering, and event delegation.
3. **URL-driven case study:** Read a project ID from the query string and show a useful not-found state for unknown IDs.
4. **Visual interactions:** Add restrained hover effects, a glitch effect, and scroll reveals with `IntersectionObserver`; account for reduced motion.
5. **Page transitions:** Consider FLIP, the Web Animations API, and the History API after ordinary navigation works reliably.
6. **Contact and launch readiness:** Add validation, loading/success/error states, and a POST integration with a form service chosen by the owner. Add lazy-loaded images and assess accessibility, responsiveness, and performance.

Build the first version in vanilla technologies. Later, introduce TypeScript, React, Next.js, Three.js, or other tools when they are relevant; mastering every detail of vanilla development is not a prerequisite.

## Current status

- The proposed folder structure was approved. Current files are still at the project root for HTML, with styles in `css`.
- Level 1 is in progress. The home page is the first page being styled; the other pages have not been built yet.
- `index.html` links to `css/styles.css`. The stylesheet currently defines design tokens and styles the existing home-page header, hero, footer, skip link, and narrow-screen navigation.
- The skip link is intentionally visually moved above the viewport until it receives keyboard focus. After reloading, press `Tab` before clicking elsewhere to reveal it. Clicking empty space moves focus away, so the link stays hidden; this is expected behavior.
- The current breakpoint is `38rem`. At or below it, the logo and navigation stack vertically; the navigation links remain in a row where they fit and wrap onto another row if needed.
- The current site has not been committed or pushed.

## Current files

- `index.html` — initial Home page and stylesheet link.
- `css/styles.css` — shared design tokens and initial Home page styles.
- `CLAUDE.md` — assistant-specific project and collaboration instructions.
- `README.md` — project context, learning goals, roadmap, and current status.

## Next practical step

Review the Home page appearance at desktop and narrow widths, and confirm keyboard focus behavior. Then refine the foundation if needed before reusing it for the other pages. Keep the work within Level 1 until the basic page structure and styles are reviewed.
