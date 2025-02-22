export default {
  printWidth: 200,
  singleQuote: true,
  semi: false,
  tabWidth: 2,
  trailingComma: 'es5',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  useTabs: false,
  overrides: [
    {
      files: ['*.html'],
      options: {
        printWidth: 200,
      },
    },
  ],
}
