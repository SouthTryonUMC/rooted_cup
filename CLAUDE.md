# CLAUDE.md — rooted. site repo

Read this before touching any file. It exists so future sessions do not drift.

## What this is

rooted. is a coffee roasting social enterprise inside South Tryon Community Missional United Methodist Church, 2516 South Tryon Street, Charlotte NC 28203. Coffee only. Older documents describe a grocery store; they are superseded. Do not design or write toward grocery.

Brand direction: **Cup** (locked August 2026). The bag is a roast log. Green is the color of coffee before it is roasted and appears only as the period and the nodes.

## Hard constraints (from the guiding document, not style)

1. Never describe neighbors as a problem to be solved.
2. Never split helpers from helped. No layout, photo, copy line, or graphic that separates the served from the serving.
3. Belonging is not probationary. Nothing implies a person earns their place by producing or loses it by relapsing.
4. No overclaiming. Never "direct trade." The line is: we buy from importers who publish what the farmer was paid.
5. Dignity without skill is condescension. Everything must signal actual craft.
6. The church is named, not hidden and not leading. One sentence, stated plainly. No church logo lockup in the header.
7. The enterprise does not drift from the table it came from.

## Open decisions. Do not settle by default.

- Legal structure (LLC, nonprofit, cooperative, two entities). No legal name in the footer or on labels until decided. Leave a blank, not a placeholder.
- "Neighborhood-owned" is a value, not a fact. Do not use it as a claim. The approved line is: "the people who live here help run it."
- Formal relationship to STCUMC.
- What we count. **No impact numbers anywhere on the site.** No "X people hired," no percentages.
- Vented vs ventless roaster.

## Voice

Short sentences. Concrete nouns. "We." Explain the business by how the money moves and who does the work, not by who it helps. Read every line out loud. If it sounds like a brochure, cut it. No epigram closing a paragraph. No three-item lists used for rhythm. Go easy on em-dashes. Two registers at once, never a commercial version and a faith version.

**Fixed lines, use as written:**

- Tagline: Good work. Good coffee. Good news.
- The paragraph: rooted is a neighborhood enterprise in South Charlotte. We roast coffee, we hire and train neighbors to do the work, and the people who live here help run it.
- The church: rooted grew out of South Tryon Community United Methodist Church and the neighbors of Brookhill Village and Southside.
- The honest number: Year one, the coffee pays part of the wages. Not all of them.
- Sign-off: Let's grow something beautiful together. Stay rooted.

**Use:** cohort, colleague, craft, kinship, belonging, wage, trade, neighbor, these blocks, table, roast, harvest, ground, roaster, anchor account, the log.

**Refuse, including in alt text and captions:** beneficiary, at-risk, underserved, giving back, hand up, second chance (as a slogan), transformation story, ex-con, offender, the less fortunate, helping those in need, neighborhood-owned, direct trade, cooperative (as plan or denial), any impact number.

## Two failure modes, equally fatal

- **The charity look:** muted earth tones, hopeful sans-serif, hand-drawn sprout, clasped hands, percentage-of-proceeds badge.
- **The generated look:** gradients, glassmorphism, emoji icons, three feature cards with line icons, drop shadows, 12px radius on everything, centered hero over a gradient, copy that sounds like a model wrote it.

If the site could belong to any nonprofit in any city, start over.

## Design tokens

Source of truth: `rooted-tokens.css`. Paste it unchanged. Summary:

- **Palette:** Paper #F5EFE4 (surface, ~58%), Paper-2 #EDE4D5, Roast #221A16 (text; dark surface, ~30%), Roast-2 #2A201B, Bark #5A4A40 (secondary text on light), Chaff #C9B8A2 (secondary text on dark), Green #4F7A3B (period and nodes only, under 2%). Hairlines: #DCCFBB on light, #4A3C33 on dark.
- **Green is never text, never a button, never a background.** It passes 3.0 as a graphic on every surface except Chaff; it fails 4.5 as text everywhere. Focus ring is 2px Green.
- **Type:** Fraunces (display; opsz follows size, SOFT 100, WONK only in the wordmark), Instrument Sans (body), Courier Prime (labels, uppercase 0.06em; the log, sentence case). All OFL 1.1 via Google Fonts. Self-host or link in a way that does not break offline editing.
- **Scale:** h1 56/40 · h2 36/30 · h3 26/22 · h4 18/17 (Instrument Sans 600) · body 17/16 · small 15 · label 12 · log 13. Measure 62ch.
- **Spacing:** 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Grid:** 12 col to 1120px, 24px gutter and margin; 4 col mobile, 16px gutter, 20px margin.
- **Corners and borders:** If it is not a node, it is not round. Radius 0 everywhere. 1px hairline borders. No drop shadows; depth is a surface change or a hairline.
- **The taproot:** a vertical rule with nodes, used only where content is an ordered sequence (the roast log, the revenue order, the twelve months). Never decoration, never a background pattern, never branching.

## Logo files

`rooted-logo-primary.svg`, `-primary-dark.svg`, `-mono.svg`, `rooted-logo-stacked.svg`, `rooted-spine.svg`, `rooted-mark-24.svg`, `rooted-favicon.svg`. Wordmark is lowercase with a period, always. Clear space = height of the o. Minimum 24px; below that use the mark. Wordmark files currently use live text on Fraunces; outlined-path versions replace them when available. Never retype the wordmark.

## Build constraints

- Static. Netlify. Deployed by push from GitHub Desktop. No build step, no framework, no npm.
- One file per page. **Flat file structure, no folders.**
- Mobile first. Fast. No icon packs, no analytics beyond what Darryl asks for. Inline SVG for marks.
- Semantic HTML, headings in order, alt text on every image, visible focus states, keyboard-navigable, AA contrast throughout.
- Until commerce is live: waitlist and subscription-interest capture, plus a separate wholesale and institutional inquiry. Lay out so a cart can drop in later.

## Photography

Hands, green coffee, the drum, chaff, the building, South Tryon light. Faces only with explicit revocable written consent. Never before-and-after. A cohort member is photographed the way a skilled worker is: at work, mid-task, competent, not looking at the camera for sympathy. No clasped hands, no stock, no one photographed to look poor.

---

## The site (built August 2026)

Static, flat, no build step. Every page links `rooted-tokens.css` (untouched) then `rooted-site.css` (components; no new colors, radii, or shadows allowed in it) and `rooted-site.js` (the only script: scroll reveals, Netlify form AJAX with inline thank-you, lazy video start).

### File map

| File | What it is |
|---|---|
| index.html | Home. Hero is the bag front at viewport scale: origin at up to 120px Fraunces, the roast log on the taproot, waitlist CTA. Then the Roast room (video slot + the paragraph), the revenue order taproot, the waitlist form. |
| coffee.html | Current offering, CSS bag mockup, full roast log, sourcing, subscription-interest form, wholesale form (`#wholesale`). |
| work.html | The cohort. Roast-surface "The job" section, twelve-months taproot, the ladder, Homeboy lineage, how to join. |
| church.html | STCUMC, Trinity's Table, theological register, the honest funding picture. |
| support.html | Standing orders, giving, partner congregations, the funder facts table ("the site's back of the bag"). |
| contact.html | Address, who-to-ask-for-what, pop-ups slot. |
| rooted-site.css / rooted-site.js | Shared components and the one script. |
| photo-*.svg | Honest placeholders for photographs not yet sourced (see below). |

### Decisions a future session could undo by accident

- **Surface switches:** exactly two mid-page Roast (dark) sections site-wide — index "Roasted on South Tryon" and work.html "The job". The dark footer is a constant frame (like the bag spine), not a third switch. Do not add more dark bands.
- **Hero scale:** `clamp(3.25rem, 12vw, 7.5rem)`. Chosen deliberately; the kit h1 stays 56px everywhere else.
- **Taproot appears only on ordered sequences:** the roast log (index hero, coffee.html), the revenue order (index), the twelve months (work.html). Nowhere else, ever.
- **Green:** only the wordmark period, the nodes, the focus ring, and the node in the small mark. The period on `h1` headings is text-colored, not green.
- **The wordmark** is live text (`.wm` span) on Fraunces with the kit's exact axes, same as the SVG logo files. Never retype it in another font or restyle the axes.
- **Footer legal line is deliberately blank** (HTML comment marks the spot). No entity name until the legal structure is decided.
- **Email everywhere is darryl@rootedclt.org** (per Darryl, Aug 2026). The usage sheet's older ddayson@wnccumc.net was superseded for the site; the kit file itself was left untouched.
- **Draft lot:** Cajamarca, Peru / washed / medium and the cup notes are drafts from the kit's examples, marked with HTML comments on index.html and coffee.html. Replace with the real importer lot sheet before launch. Never print a made-up farm price; the log says "Published by the importer. Printed on the bag." until there is a real number.
- **Commerce later:** coffee.html's bag panel has a marked CART SLOT comment; price/size/add-to-cart replace two paragraphs there. Nothing else moves.

### Forms (Netlify)

Two forms, both `data-netlify="true"`, honeypot `netlify-honeypot="bot-field"` with an off-canvas `.bh` field:

- **waitlist** — name, email, zip (optional), `subscription` checkbox. Appears on index.html (`#waitlist`) and coffee.html (`#subscribe`, checkbox pre-checked). Same form name on both pages on purpose: one submission list in Netlify.
- **wholesale** — organization, name, email, phone, kind, volume, notes. coffee.html `#wholesale` only; support.html links to it.

JS intercepts submit, posts urlencoded to `/`, and reveals the matching `.form-done` block (`data-done` attribute names its id). With JS off, Netlify's default success page shows. Testing locally the fetch fails and the inline note says to email instead — that is expected off-Netlify behavior, not a bug.

### Photography (not yet sourced)

The sandbox that built the site could not reach Unsplash/Pexels/Coverr (network policy), so photo slots ship as kit-styled placeholder SVGs. Each placeholder file and its `<img>` carry comments naming the shot and the final filename:

| Slot | Placeholder | Replace with | Shot |
|---|---|---|---|
| index + work | photo-drum.svg | drum.jpg (and drum-loop.mp4 + drum-poster.jpg for the video moment, index only) | the drum mid-roast / beans dropping |
| coffee | photo-green-coffee.svg | green-coffee.jpg | green coffee in the jute bag |
| work | photo-hands.svg | hands.jpg | hands at the cooling tray, **no identifiable face** |
| church + contact | photo-south-tryon.svg | south-tryon.jpg | morning light on South Tryon; a real photo of 2516 beats stock |

To swap: change the `src` (and drop "Placeholder: " from the alt). Compress to ~200KB (images) / under 2MB (video). Warm neutral, daylight, square corners. Record the photographer credit here when files land. **Never a stock photograph of a person standing in for a cohort member, a neighbor, or anyone at Trinity's Table — hands without an identifiable face are the limit.**

### Fonts

Self-hosted, which the kit explicitly allows ("Self-host or link in a way that does not break offline editing"). `rooted-fonts.css` declares @font-face for the `font-*.woff2` files in the root: Fraunces variable (300–700, all four axes, upright + italic), Instrument Sans variable (400–600 upright, 400 italic), Courier Prime (400, 700, italic 400). Latin + latin-ext subsets, downloaded from Google Fonts, all SIL OFL 1.1. Works fully offline and needs no third-party request. Offline or before load, the fallback stacks in the tokens render (Iowan Old Style/Georgia, Helvetica/Arial, Courier New) and nothing breaks. Do not switch pages back to the Google Fonts link tag; the kit HTML files keep theirs, which is fine — they are reference documents, not site pages.
