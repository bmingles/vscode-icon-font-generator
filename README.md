# Vscode Icon Font Generator

Generate Icon Font for Usage with vscode Extensions

```sh
npm run gen -- /dir/containing/svg/files/
```

## Output

- icons.woff, icons.woff2, icons.eot - font files
- icons.json - mapping of icon ids to decimal character codes
- iconsHex.json - mapping of icon ids to hexidecimal character codes (needed for `vscode` icon font contributions)
