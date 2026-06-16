import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

join(__dirname, './node_modules/lru-cache/package.json');
join(__dirname, './node_modules/lru-cache/dist/commonjs/node/index.min.js');
join(__dirname, './node_modules/mtranserver/dist');
import 'mtranserver/dist/main.js';
