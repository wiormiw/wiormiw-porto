/** @type {import("prettier").Config} */
export default {
  // Core formatting options
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,

  // Plugins
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  // Astro specific
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
