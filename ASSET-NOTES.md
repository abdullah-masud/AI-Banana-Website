# AI Banana asset replacement notes

## Master character render

The current hero image is generated from:

`assets/characters/Master Character Render v1.png`

When the corrected fully robotic Master artwork is supplied, replace that file using the same filename and run:

`npm run optimize:images`

This regenerates `src/assets/hero-character.webp`, which is the production image imported through `src/data/siteConfig.ts`. The responsive crop and layout will remain intact.

## Hero arm animation limitation

The supplied Master character files are flattened PNG renders and annotated reference sheets. They do not contain separate transparent layers for the body or individual robotic arms. A true arm-deployment animation therefore cannot be produced cleanly from the supplied artwork without inventing or destructively cutting visual information.

The production hero uses a lightweight task-activation sequence instead: the first three capabilities activate slowly, the remaining capabilities activate more quickly, and subtle connector lines and status nodes settle into a completed state. A true layered arm animation would require approved body and arm artwork exported as separate transparent PNG, SVG, PSD, or After Effects layers.

## AI team portraits

No standalone team portrait files were present during this revision. The six production portraits in `src/assets/team-*.webp` are clean crops generated from `client-reference/Org Chart for AI Banana.png` by `scripts/optimize-images.mjs`. Replace them with standalone approved portraits if the client supplies higher-resolution originals.
