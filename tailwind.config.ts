/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 使用现有颜色方案
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        // 标题字体：Inter或系统字体
        heading: ['Inter', 'system-ui', 'sans-serif'],
        // 正文字体：系统默认字体栈
        body: ['system-ui', 'sans-serif'],
      },
      // 使用标准的Tailwind间距scale，确保移动端友好
      spacing: {
        // 保留默认间距scale
      },
    },
  },
  plugins: [],
};
