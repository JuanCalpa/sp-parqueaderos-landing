---
trigger: always_on
---

# UI/UX Design & Changes Rule (MANDATORY)

Before making ANY UI/UX design, layout, component, styling, interaction, or visual change in this repository, you MUST first consult and apply the **`ui-ux-pro-max`** skill located at `.agent/skills/ui-ux-pro-max/SKILL.md`:

1. Read `.agent/skills/ui-ux-pro-max/SKILL.md` if not already loaded in context.
2. Run the skill's search script (`python ".agent/skills/ui-ux-pro-max/scripts/search.py"`) to generate or query the design system (`--design-system`), domain guidelines (`--domain`), and stack best practices (`--stack astro` and `--stack html-tailwind`).
3. If `design-system/sp-parqueaderos/MASTER.md` (or `design-system/MASTER.md`) exists, read it first as the Source of Truth before modifying or creating components/sections.
4. Verify all UI changes against the skill's Priority Rule Categories (Accessibility, Touch & Interaction, Performance, Style Selection, Layout & Responsive, Typography & Color) and Pre-Delivery Checklist (no emoji icons, proper contrast, focus rings, `cursor-pointer`, responsive breakpoints).
