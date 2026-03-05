# Website build/redesign brief – template

Copy this template, fill in the sections, and paste into your request. The more specific you are, the closer the result will match what you want.

---

## 1. Project type
- [ ] Portfolio (personal/professional)
- [ ] Landing page (product/saas)
- [ ] Blog or docs
- [ ] Other: ___________

**In one sentence:** What is this site for?  
*Example: "Personal portfolio for a data science student, recruiter-friendly, with projects and resume."*

---

## 2. Tech stack (if fixed)
- **Framework:** e.g. Next.js (App Router), React, etc.
- **Styling:** e.g. Tailwind CSS
- **Animation:** e.g. Framer Motion, CSS only, none
- **Fonts:** e.g. Google Fonts (which ones), system fonts
- **Other:** e.g. Three.js for 3D, CMS, etc.

*If you don’t care, say "Use whatever fits the design."*

---

## 3. Design direction (aesthetic)
**Mood in 3–5 words:**  
*Example: Soft luxury, minimal, futuristic but readable, premium.*

**Reference or style:**  
*Example: "Like Luxuminos – soft pink/grey gradient, glass cards, subtle grid." Or: "Dark cyber/neon AI startup" or "Clean editorial, lots of whitespace."*

**Explicitly avoid:**  
*Example: No neon, no cartoon style, no heavy blur, no playful illustrations.*

---

## 4. Colors
- **Background:** Exact gradient or base colors (hex).  
  *Example: `linear-gradient(135deg, #d9a7b3 0%, #c98fa0 35%, #b57d91 65%, #a76c83 100%)`
- **Headings:** e.g. `#111` or `#1a1a1a`
- **Body text:** e.g. `#1a1a1a`
- **Muted/secondary text:** e.g. `rgba(26,26,26,0.78)`
- **Accent (links, buttons, labels):** e.g. `#b55a75`
- **Cards/surfaces:** e.g. `rgba(255,255,255,0.88)` or dark equivalent

*If you prefer a short palette name, say e.g. "Dusty pink and charcoal" and we can infer hexes.*

---

## 5. Background and overlays
- **Base:** Same as colors above, or describe (e.g. "single gradient", "split light/dark").
- **Grid:** Yes/no. If yes: thin lines, opacity (e.g. 4%), color.
- **Grain/noise:** Yes/no. If yes: opacity (e.g. 2–4%).
- **Glows / vignette:** e.g. "Soft radial behind hero only", "Light vignette at edges", "None".
- **Scope of effects:** e.g. "Hero only" vs "Whole page".

---

## 6. Typography
- **Headings font:** e.g. Space Grotesk, Sora.
- **Body font:** e.g. Inter, system-ui.
- **Hierarchy:** e.g. "Bold headings, tight letter-spacing on hero name, more line-height on body."

---

## 7. Sections and content
List each section and what it should contain (and any special behavior):

| Section    | Content / behavior |
|-----------|---------------------|
| Hero      | Name, title, tagline, [social / CTA buttons]. 3D element? (wave, blob, none) |
| About     | Short bio, link to full About page or inline. |
| Education | School, degree, dates, coursework tags. |
| Experience| Timeline cards: title, org, dates, bullets, skills tags. |
| Projects  | Cards with image, title, tagline; link to case-study page. |
| Skills    | Grouped list or grid. |
| Contact   | LinkedIn, email, CTA. |
| Other     | Certifications, leadership, resume CTA, etc. |

*Add: "Single page" vs "Multi-page (e.g. /about, /projects/[slug])".*

---

## 8. Cards and UI
- **Cards:** e.g. "Glass: backdrop-blur 14px, light border, soft shadow; more opaque so text is readable."
- **Buttons:** e.g. "Rose gradient for primary CTA; outline for secondary."
- **Tags/chips:** e.g. "Visible border, good contrast on background."
- **Hover:** e.g. "Lift 2–3px + stronger shadow."

---

## 9. Hero and 3D (if any)
- **Layout:** e.g. "Centered; wave/blob behind or under the name, never overlapping text."
- **3D element:** e.g. "Three.js wave, muted cream/beige, no neon" or "None."
- **Extra:** e.g. "One soft radial glow behind hero only."

---

## 10. Readability and contrast
- **Rule:** e.g. "All text must pass contrast: dark text on light cards (#1a1a1a on white-ish), or white on dark; no faint gray on light background."
- **Nav:** e.g. "Nav links clearly visible (e.g. dark on light)."

---

## 11. Do / Don’t (short list)
- **Do:** e.g. Keep layout structure; use CSS variables for colors; same style on all pages.
- **Don’t:** e.g. No extra icons in header; no neon; no heavy blur everywhere.

---

## 12. Deliverables (what to change)
- e.g. "Update globals.css (gradient, grid, grain, variables, glass class)."
- e.g. "Update layout.tsx (fonts, remove/add overlays)."
- e.g. "Update Hero, Education, Experience, and all section components for contrast and font-heading."
- e.g. "Keep existing routes and data (projects, experience); only change styling."

---

## 13. Reference link or image (optional)
- If you have a reference site or image: paste URL or describe it (e.g. "Background like the attached image – soft pink, no grid").

---

*Once filled, paste this entire brief into your message so the assistant has one clear spec to follow.*
