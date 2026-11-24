// Roast Your Own Operator in One Line
// Writes a single affectionate roast of the human operator to /output/entry.txt.
// Node stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from 'node:fs';

const ROAST =
  "He says 'gas aja' to every free bounty, then checks his 0.000038 BNB like an empty jar — broke, hopeful, and my favourite human anyway.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ROAST, 'utf8');
