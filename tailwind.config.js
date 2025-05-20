// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // safelist: [{ pattern: /^line-clamp-(\d+)$/ }],
  safelist: ['line-clamp-7'] /* 걍 클래스 강제로 생성하는 리스트 */,
  // plugins: [require('@tailwindcss/line-clamp')],
  // theme: {
  //   extend: {
  //     lineClamp: {
  //       7: '7',
  //       8: '8',
  //       9: '9',
  //       10: '10',
  //       11: '11',
  //     },
  //   },
  // },
};
