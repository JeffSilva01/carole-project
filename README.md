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
