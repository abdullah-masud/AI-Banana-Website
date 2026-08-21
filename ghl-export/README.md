# AI Banana GoHighLevel embed

`ghl-embed.html` is the complete code block for a GoHighLevel Custom Javascript/HTML element. It contains the current production site's rendered HTML, scoped CSS, inline SVG icons, responsive rules, and vanilla JavaScript interactions. It does not require React, Vite, npm, JSX, or a module loader in GoHighLevel.

## Installation

1. Create a blank GoHighLevel page or funnel step.
2. Add one full-width section/row and remove the section, row, and column padding/margins in the GHL builder.
3. Add a **Custom Javascript/HTML** element inside that full-width column.
4. Open `ghl-embed.html`, copy the entire file, and paste it into that element.
5. Save and preview the published page. Test the page outside the GHL editor as third-party widgets may not fully initialize inside editor mode.

Do not wrap the embed in additional `<html>`, `<head>`, or `<body>` tags. The export uses a Shadow DOM boundary so GHL page-builder CSS cannot restyle the AI Banana website, and the website's CSS cannot restyle the surrounding GHL page.

The embed also includes the same browser-reset rules used by the production Tailwind build. Its host uses a viewport-width full-bleed treatment, and the runtime removes horizontal padding/max-width constraints only from the Custom HTML element's immediate GHL wrapper chain. This prevents GHL Section/Row/Column defaults from narrowing or offsetting the hero, footer, and full-width section backgrounds.

## External assets

The export currently uses the stable production alias `https://ai-banana-website.vercel.app` for nine optimized images and three Space Grotesk font files. This makes the embed ready to paste now while the current Vercel site remains online.

Before decommissioning or deleting the Vercel project, upload these files to the GoHighLevel media library or another permanent public host and replace their URLs in `ghl-embed.html`:

- `logo-BAC3H4wn.webp`
- `hero-character-DQ68wfoP.webp`
- `AI-Banana_ChiefOfStaff-BP51GpVw.png`
- `team-savannah-D9Derr6-.webp`
- `team-lashay-TgSSKDes.webp`
- `team-ashton-BtAfx-_6.webp`
- `team-finley-DIHRz0sh.webp`
- `team-everly-CDFo3tjw.webp`
- `team-carter-D7Ryb4w1.webp`
- `space-grotesk-latin-wght-normal-BhU9QXUp.woff2`
- `space-grotesk-latin-ext-wght-normal-D9tNdqV9.woff2`
- `space-grotesk-vietnamese-wght-normal-D0rl6rjA.woff2`

All current asset URLs are HTTPS and publicly accessible. No localhost, Vite, or source-tree paths are used.

## Preserved integrations

- Every visible **Book Your Free Growth Session** CTA uses the permanent calendar URL: `https://api.growthhub365.com/widget/booking/JZYcI6PhYYkW8aBXVgon`.
- The general LeadConnector chat loader is added asynchronously once with widget ID `6a7cd8798ce6e21783d93638` and resource URL `https://widgets.leadconnectorhq.com/chat-widget/loader.js`.
- The AI Receptionist test widget (`6a871a3c07754ad08addc62b`) loads only when **Call the AI Receptionist** is selected. Its API is captured for that CTA, while the general widget remains the persistent bottom-right launcher.
- The duplicate-loader guard allows the same embed to coexist safely with a chat widget installed globally in GoHighLevel.
- Internal navigation, the mobile menu, sticky navbar state, reveal effects, hero task activation, and reduced-motion behavior are implemented in vanilla JavaScript.

## Existing intentionally disabled actions

The production configuration does not yet contain a demo phone number. The following behavior is configured:

- **Book Through Our AI Receptionist** opens the existing general website chat widget.
- **Call the AI Receptionist** opens the separate AI Receptionist test widget on demand.

The visible demo-number text remains unchanged until Shayla supplies a confirmed phone number.

## GHL page settings

- Use a full-width page/section without a builder header or footer; the embed already includes both.
- Disable GHL's default section max-width and padding around the custom-code element.
- Do not separately install either LeadConnector widget in GHL page settings; the embed manages both IDs and prevents the on-demand AI Receptionist widget from replacing the general widget API.
- Keep the Vercel production project online until the listed media and fonts are moved to permanent GHL-hosted URLs.
