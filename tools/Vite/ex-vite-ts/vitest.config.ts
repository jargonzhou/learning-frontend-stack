/// <reference types="vitest/config" />
import { defineConfig } from 'vite'

// https://vitest.dev/config/
export default defineConfig({
  test: {
    typecheck: {
      enabled: true,
    },
  },
})