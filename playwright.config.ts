import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://www.freerangetesters.com",
  },
  timeout: 30000,
  workers: 1,
});
