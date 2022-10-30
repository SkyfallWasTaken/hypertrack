import { sveltekit } from "@sveltejs/kit/vite";
import WindiCSS from "vite-plugin-windicss";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [WindiCSS(), sveltekit()],
};

export default config;
