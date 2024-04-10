import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://himanshugupta2077.github.io',
  prefetch: true,
  integrations: [tailwind()],
});
