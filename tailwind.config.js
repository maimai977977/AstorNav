/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. 启用基于 class 的暗色模式（关键）
  darkMode: 'class',

  // 2. 指定哪些文件包含 Tailwind 类名（必须配置，否则生产环境会遗漏样式）
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],

  // 3. 主题配置（推荐使用 extend，避免覆盖默认颜色）
  theme: {
    extend: {
      // 你可以在这里添加自定义颜色、字体等，不会覆盖默认样式
      colors: {
        primary: '#1fb6ff',
        secondary: '#7e5bef',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },

  // 4. 插件（如果有需要）
  plugins: [],
};