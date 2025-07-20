// Vite config to allow custom hosts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ["osduth.leokratis.tech"]
  },
});
