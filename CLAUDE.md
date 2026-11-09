# Talos.io Project Instructions

## Project

Talos.io is a portfolio for a design brand focused on cyberpunk, futuristic, and gaming brand identities. The visual style is dark, cold, and minimal. Section labels use bracket notation such as `[ BRANDING // GAMING ]`. Do not use emojis. Follow designs in the `/design` folder. Use placeholder text and images until real content is provided.

Pages:
- Home
- Work, with a project grid
- A project case study
- About
- Contact

The portfolio contains six brand design projects and Nexus, a multithreaded HTTP server built in C++.

## Technology and accessibility

- Use plain HTML, CSS, and JavaScript only. Do not use libraries, frameworks, or build tools.
- Use JavaScript ES modules with `import` and `export`.
- Explain how to run the site with a simple local server.
- Make the site mobile-friendly and accessible. Use semantic HTML, real buttons, useful image alt text, and visible keyboard focus.
- Animate only `transform` and `opacity`. Respect `prefers-reduced-motion`.
- Keep implementation as simple as possible and do not add unrequested features.

## Learning workflow

- The user is learning to read code, understand it, and spot problems. They review the code; explain changes rather than merely completing them.
- Work in small, reviewable steps: one feature at a time. Never build a whole level at once. Stop after each level for the user's review.
- Before asking the user to run anything, ask them to predict what will happen.
- After each change, explain every function in short, simple sentences: first say what it does, then say what happens after it runs.
- After each change, give one thing to check or deliberately break as a test.
- In each level, leave one small function for the user to write by hand. Mark it with a `TODO` comment explaining what it should do.
- Do not silently fix the user's bugs. First point out where to look, then help if asked.
- Do not start a level until the user approves the proposed folder structure or the previous level.

## Planned levels

1. HTML and CSS structure for all pages, including CSS variables for colours and fonts.
2. Store projects in one data file. Build cards from data. Add filter buttons using a state-to-render pattern and event delegation.
3. Build one project page that reads `?id=` from the URL and shows a not-found state for unknown IDs.
4. Add hover effects, a glitch text effect, and scroll reveals using CSS and `IntersectionObserver`.
5. Add page transitions using FLIP, the Web Animations API, and the History API.
6. Add a validated contact form that sends a POST request to a form service and shows loading, success, and error states. Add lazy-loaded images and aim for a Lighthouse score of 90+.

Implement only the current level. Do not move to the next level until the user has reviewed and approved the current one.
