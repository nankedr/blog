import { defineConfig } from "astro/config";

const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:4321";

export default defineConfig({
  site,
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true
    }
  }
});
