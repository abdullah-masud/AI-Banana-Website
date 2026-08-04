# AI Banana asset replacement notes

## Master character render

The current hero image is generated from:

`assets/characters/Master Character Render v1.png`

When the corrected fully robotic Master artwork is supplied, replace that file using the same filename and run:

`npm run optimize:images`

This regenerates `src/assets/hero-character.webp`, which is the production image imported through `src/data/siteConfig.ts`. The responsive crop and layout will remain intact.

## AI team portraits

No standalone team portrait files were present during this revision. The six production portraits in `src/assets/team-*.webp` are clean crops generated from `client-reference/Org Chart for AI Banana.png` by `scripts/optimize-images.mjs`. Replace them with standalone approved portraits if the client supplies higher-resolution originals.
