/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
    plugins: ['prettier-plugin-tailwindcss'],
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    endOfLine: 'lf',
    printWidth: 80,
}

export default config
