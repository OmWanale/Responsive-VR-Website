# Responsive-VR-Website

A responsive single-page VR showcase website built with HTML, CSS, JavaScript, and Bootstrap 4.

## Current Implementation

The website currently includes:

- A fixed-top responsive navigation bar with section anchors.
- Smooth scrolling between sections.
- Hero banner with a call-to-action button.
- Product section with interactive category filtering:
	- All Products
	- Headset
	- Headset + Controllers
- Features section with six feature cards.
- Included VR Kit section with product visuals.
- Optics and Controllers information blocks.
- Trending Blogs section with live client-side search and result count.
- Empty-state message when no blog matches the search query.
- Contact section with CTA and footer navigation.
- Social and contact links in the footer.
- Back-to-top floating button that appears after scrolling.
- Scroll-reveal animations using Intersection Observer.
- Light/Dark theme toggle with preference saved in localStorage.

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 4.5.2
- jQuery (used for Bootstrap navbar collapse behavior)
- Popper.js (Bootstrap dependency)

## Project Structure

```text
Responsive-VR-Website/
|-- index.html
|-- vr-css.css
|-- vr-script.js
|-- README.md
```

## JavaScript Features Implemented

The script in `vr-script.js` handles:

- Mobile navbar auto-collapse when a nav link is clicked.
- Theme switching (light/dark) with persistence (`vr-theme` in localStorage).
- Product card filtering by `data-filter` and `data-product` attributes.
- Blog search filtering based on card text content.
- Dynamic blog result text update (`1 blog found` / `n blogs found`).
- Empty-state visibility control for blog search.
- Back-to-top button visibility on scroll and smooth return to top.
- One-time reveal animation trigger for selected page elements.

## Styling Notes

The stylesheet `vr-css.css` includes:

- Core layout and typography styles.
- Product card image overlays for readability.
- Reusable button and section styles.
- Filter chip states (`default`, `hover`, `active`).
- Dark theme overrides using CSS custom properties.
- Responsive adjustments for smaller screens.

## How to Run

1. Open the `Responsive-VR-Website` folder.
2. Open `index.html` in your browser.

No build tool or package installation is required.

## Author

Created by Om Wanale.
