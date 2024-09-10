# Vscode Icon Font Generator

Generate Icon Font for Usage with vscode Extensions (uses [fantasticon](https://www.npmjs.com/package/fantasticon) under the hood but includes a mapping of hexidecimal codes).

```sh
npm run gen -- /dir/containing/svg/files/
```

## Output

Files will be output to the `/dist` folder.

- icons.woff, icons.woff2, icons.eot - font files
- icons.json - mapping of icon ids to decimal character codes
- iconsHex.json - mapping of icon ids to hexidecimal character codes (needed for `vscode` icon font contributions)
- icons.html, icons.css - preview the icon set in browser
