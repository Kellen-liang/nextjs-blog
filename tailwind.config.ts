import type { Config } from "tailwindcss";

const config: Config = {
  /**
   * content 部分是您配置所有 HTML 模板、JS 组件以及包含 Tailwind 类名称的任何其他文件的路径的位置。
   */
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
export default config;
