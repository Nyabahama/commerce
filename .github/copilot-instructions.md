# MOLOKAY.App - AI Coding Guidelines

## Project Overview
This is a static e-commerce website mimicking Amazon's design, built with vanilla HTML, CSS, and JavaScript. The site features a header with navigation, search bar, and cart; a secondary navigation bar; and a hero image carousel.

## Key Files
- `index.html`: Main page structure with header, navigation, and hero section.
- `style.css`: All styling, including responsive design and carousel animations.
- `script.js`: Currently empty; intended for interactive features like carousel controls and mobile menu.

## Architecture
- Single-page application with semantic HTML sections.
- CSS-first approach with flexbox layouts and media queries for responsiveness.
- No frameworks; pure vanilla code.

## Styling Conventions
- Color palette: Dark theme (#131a22 for header, #232f3e for nav, #febd69 for accents, #eaeded for body).
- Use `.flex` class for flexbox containers (e.g., `<div class="flex input">` in header).
- Font Awesome icons integrated via CDN for UI elements.
- Responsive breakpoints: 900px and 700px for mobile adaptations.
- Accessibility: Focus outlines on interactive elements.

## Developer Workflows
- View site: Open `index.html` directly in a browser.
- Edit styles: Modify `style.css` and refresh browser.
- Add interactivity: Populate `script.js` with event listeners (e.g., for carousel navigation).

## Patterns & Best Practices
- External dependencies: Load Font Awesome from CDN; use flag images from flagcdn.com.
- Image assets: Store in `images/` folder (e.g., logos like `bb.jpg`, `bnc.png`).
- Mobile-first: Hamburger menu appears below 700px; search bar stacks on small screens.
- Carousel implementation: Use CSS transforms for sliding; indicators for navigation.

## Integration Points
- No backend; static site.
- Potential future JS: Add click handlers for cart, search, and carousel controls.