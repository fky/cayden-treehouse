#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import ejs from 'ejs';

const here         = dirname(fileURLToPath(import.meta.url));
const root         = join(here, '..', '..');
const gamesPath    = join(root, 'games.json');
const templatePath = join(here, 'template.ejs');
const outputPath   = join(root, 'index.html');

const games     = JSON.parse(readFileSync(gamesPath, 'utf8'));
const updatedAt = new Date().toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
const template  = readFileSync(templatePath, 'utf8');

writeFileSync(outputPath, ejs.render(template, { games, updatedAt }));
console.log(`Rebuilt index.html with ${games.length} games`);
