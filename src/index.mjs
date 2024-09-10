import fs from 'node:fs';
import { generateFonts } from 'fantasticon';

const inputDir = process.argv[2];
const outputDir = './dist';

if (inputDir == null) {
  console.error('No icon directory specified');
  process.exit(1);
}

if (!fs.existsSync(inputDir)) {
  console.error(`Icon directory '${inputDir}' does not exist`);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

console.log(`Generating icons from '${inputDir}'`);

// TBD: Determine if the range of characters actually matters. For now just
// picking one consistent with some other tools I've seen.
const startingCharacter = 0xe900;

// fantasticon will generate a JSON file with the codepoints for each icon in
// decimal format
const codepoints = fs
  .readdirSync(inputDir)
  .filter(name => name.endsWith('.svg'))
  .reduce((memo, name, i) => {
    memo[name.replace('.svg', '')] = startingCharacter + i;
    return memo;
  }, {});

// Generate a code point mapping in hex format (useful for vscode extension icons)
const codepointsHex = Object.entries(codepoints).reduce(
  (memo, [name, codepoint]) => {
    memo[name] = `\\${codepoint.toString(16)}`;
    return memo;
  },
  {}
);

fs.writeFileSync(
  './dist/iconsHex.json',
  JSON.stringify(codepointsHex, null, 2)
);

generateFonts({
  inputDir,
  outputDir,
  codepoints,
});
