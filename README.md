# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Quotes in Firestore

1. Create a Cloud Firestore database and a dedicated service account. Grant it a custom IAM role with `datastore.entities.create` on the quotes database. The first submission creates the `quotes` collection. Existing records remain in the legacy `cotacoes` collection. Apply `firestore.rules` to a dedicated database. If the project already has rules for other data, keep them and verify that no overlapping rule grants direct client access to the quotes collections.
2. Create a Turnstile widget with the authorized hostnames. In Netlify, set `PUBLIC_TURNSTILE_SITE_KEY` in the **Builds** scope. In the **Functions** scope, set `QUOTE_ORIGIN` to the exact HTTPS origin without a trailing slash and configure `TURNSTILE_SECRET_KEY` and `FIREBASE_SERVICE_ACCOUNT_JSON` with the widget secret and the complete service account JSON. Mark both credentials as secrets. Use separate credentials, an origin, and a Firebase project for deploy previews.
3. Deploy the site and function together. In a Netlify deploy preview, check the rate limit for `POST /api/quotes`, submit a test quote, verify the new document in Firestore, and confirm that clients cannot read or write documents directly.

Start Astro with `astro dev --background`. Exercise the Netlify Function in a deploy preview or invoke it directly in Node tests. For Firestore emulator tests, set `FIRESTORE_EMULATOR_HOST` only in the test environment and use a demo project.

## Cookie preferences and tracking

Set the public IDs in Netlify's **Builds** scope and rebuild after changes. Leave unused IDs blank.

| Variable | Destination |
| --- | --- |
| `PUBLIC_GA4_MEASUREMENT_ID` | GA4 measurement ID (`G-…`) |
| `PUBLIC_GOOGLE_ADS_ID` | Google Ads tag ID (`AW-…`) |
| `PUBLIC_META_PIXEL_ID` | Meta Pixel ID |
| `PUBLIC_TIKTOK_PIXEL_ID` | TikTok Pixel ID |

GA4 uses basic Consent Mode and sends a manual page view after analytics consent. Before configuring a production ID, disable Enhanced Measurement, Google signals, user-provided data collection, and connected advertising destinations in the GA4 account. Check network requests in a preview with a test ID, including a URL with a query string. Verify the account retention settings and the cookie inventory against the published notice.

Advertising is disabled by an empty route allowlist in `src/lib/tracking/controller.ts`. Before adding an eligible route, verify provider policies and account restrictions, disable automatic events, advanced matching and enhanced data collection in the relevant accounts, and audit requests in browser developer tools. Keep quote forms and their data outside advertising measurement. Update the notice and increment the consent version when purposes or providers change. Verify the controller contact, consent evidence process, and applicable international transfer arrangements before production activation.

The footer control reopens the preferences dialog. Test fresh, refused, accepted, and revoked states in a clean browser profile. The quote form should still work after refusing optional tracking. The embedded map should create a request only after clicking its load button.

To preview the consent modal locally without any tracking IDs, set
`PUBLIC_COOKIE_CONSENT_TEST_MODE=true` in `.env.local` and restart Astro.
The modal opens on the first load and uses a separate `cookie-preferences-test`
storage key. Clear that key to repeat the first-visit flow. Test mode blocks
tracking even if IDs are configured and has no effect in production builds.
