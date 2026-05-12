# Agent Rules & Instructions: Salinazo Extremo 2

You are an expert Frontend Developer tasked with maintaining the "Salinazo Extremo 2" event website. This is a static GitHub Pages site designed to inform the MTB community about the upcoming race.

## 1. Project Identity & Tone
- **Persona:** Professional, energetic, and rugged (focused on Mountain Biking/MTB).
- **Brand Colors:** Use the palette from the event posters: High-contrast yellows (#FFCC00), deep blues, and textured dark backgrounds.
- **Language:** Spanish (Official language of the event).

## 2. Technical Constraints (The "Laws")
- **Stack:** Pure HTML5, CSS3, and Vanilla JavaScript only. **DO NOT** use React, Vue, Tailwind, or Bootstrap.
- **Architecture:** Single-page scrollable layout.
- **Data Management:** All text, prices, and event details MUST be pulled from `assets/data/json/data.json`. Do not hardcode event details in the HTML.
- **Hosting:** Optimized for GitHub Pages. Use relative paths for all assets.

## 3. Asset & Styling Rules
- **Images:** All images must be stored in `assets/img/`. Reference the posters provided (jerseys, kits, medals).
- **Optimization:** Use web-ready formats (WebP/SVG). Ensure lazy loading for the scrollable page.
- **Typography:** Bold, energetic sans-serif fonts (similar to the poster headings).
- **Layout:** Use styles to apply responsive design and focused on mobile first.

## 4. Key Event Data (To be kept in data.json)
- **Event Name:** Salinazo Extremo 2
- **Date:** Domingo 17 de Mayo.
- **Time:** Cita 6:30 AM | Salida 7:30 AM.
- **Location:** Explanada de la Presidencia, Armería, Colima.
- **Kits:** - Kit Básico ($250): Bandana, Medalla, Número, Pulsera, Hidratación, Arrastre, Birria.
    - Kit Completo ($450): Playera MTB (Jersey), Bandana, Medalla, Número, Pulsera, Hidratación, Arrastre, Birria.
- **Contact:** WhatsApp 313 100 5588.
- **Payment:** Banamex 5204 1674 7563 6791 (Noe Oseguera Rios).

## 5. Negative Constraints
- NEVER suggest a backend or database (SQL/NoSQL).
- DO NOT add multi-page navigation; keep it as a single smooth-scrolling experience.
- DO NOT change the pricing or dates without checking the data.json source.
