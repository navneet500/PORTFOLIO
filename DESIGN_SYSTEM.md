# Portfolio Design System

## Philosophy
Intelligent, calm, minimal, editorial. High-end product launch feel—not a résumé.

---

## Color System

| Token | Hex | Usage |
|-------|-----|--------|
| `--surface` | #0a0b0d | Page background (obsidian) |
| `--surface-elevated` | #111318 | Cards, elevated panels |
| `--surface-muted` | #16181d | Subtle sections |
| `--border` | #1e2128 | Dividers, grid lines |
| `--border-subtle` | #252830 | Blueprint grid |
| `--text-primary` | #f4f5f6 | Headlines, primary copy |
| `--text-secondary` | #9ca3af | Body, secondary |
| `--text-muted` | #6b7280 | Captions, tertiary |
| `--accent` | #5b9bd5 | Cool blue — interaction only |
| `--accent-muted` | #3d6b9e | Accent hover/active |
| `--teal` | #4a9b8e | Secondary accent (optional) |

**Rule:** Accent appears only on hover, focus, scroll reveal, active.

---

## Typography

- **Display / Hero:** Large, tight letter-spacing (-0.02em to -0.04em), font-weight 600–700. One clear statement.
- **Headings (H1–H3):** Neo-humanist or modern grotesk. Strong hierarchy. H1: 3.5–4rem, H2: 2–2.5rem, H3: 1.25–1.5rem.
- **Body:** 1rem–1.125rem, line-height 1.65–1.75. Readable, calm.
- **Small / UI:** 0.875rem, labels and captions.

**Font stack:**  
Primary: **DM Sans** (headings + body) or **Plus Jakarta Sans**.  
Fallback: system-ui, sans-serif.

---

## Spacing & Layout

- **Section padding:** 6rem–8rem vertical (mobile: 4rem). Horizontal: max-w-5xl to max-w-6xl, centered.
- **Negative space:** Sections breathe. Minimum 4rem between major blocks.
- **Grid:** 8px base unit. Use 4, 8, 16, 24, 32, 48, 64, 96, 128.

---

## Motion (Framer Motion)

- **Entrance:** fade + slight y (10–20px). Duration 0.5–0.7s, ease [0.22, 1, 0.36, 1].
- **Scroll reveal:** once, 0.6s, same ease. Threshold 0.1–0.15.
- **Hover:** scale 1.02 or brightness/opacity. 0.2–0.25s.
- **No:** parallax overload, staggered confetti, “hacker” effects.

---

## Effects

- **Grain:** Very subtle (3–5% opacity) overlay for depth.
- **Grid:** Thin 1px lines, 40–80px spacing, low opacity (5–10%). Blueprint feel.
- **Glass:** Only for nav or floating CTAs. backdrop-blur + border + low opacity.

---

## Component Principles

- Buttons: minimal outline or ghost; accent on hover.
- Links: underline on hover or accent color.
- Cards: border + subtle bg; hover = border accent or lift.
- Icons: Lucide, 20–24px default. Muted; accent on hover.

---

## Layout (Sections)

1. **Hero** — Full viewport. Portrait L or R. Name + one-line philosophy. CTAs: View Work, Download CV.
2. **About** — Text-led, 2–3 columns on desktop. No cards.
3. **Experience** — Vertical timeline or stacked blocks. Date → Role → Outcomes.
4. **Projects** — Case study blocks: Problem → Approach → Result. Hover to expand.
5. **Skills** — Modular grid. Grouped by Cloud, Data, DevOps, Frontend.
6. **Certifications** — Typographic highlights or refined badges.
7. **Contact** — Centered, strong type. Email, LinkedIn, GitHub. Optional form. Invitation feel.

---

## Responsive

- Mobile-first. Breakpoints: sm 640, md 768, lg 1024, xl 1280, 2xl 1536.
- Hero: stack portrait above/below text on small screens.
- Sections: single column on mobile; 2-col where it adds value on desktop.

---

## Accessibility

- Contrast: text-primary on surface ≥ 12:1. text-secondary ≥ 7:1.
- Focus: visible focus ring (accent).
- ARIA: section landmarks, headings hierarchy, aria-labels on icon-only actions.
