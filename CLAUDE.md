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
- The paragraph: rooted is a neighborhood enterprise in South Charlotte. We roast coffee, we hire and train neighbors to do the work, and the people who live here help run it. Most of the people we hire have been through the justice system. We hire them as roasters, and roaster is the job title.
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
