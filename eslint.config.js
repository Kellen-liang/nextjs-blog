

import { recommended } from './eslint-config/recommended.js';
import { resolve } from 'path';

export default recommended({
  tsconfigPath: resolve(process.cwd(), './tsconfig.json'),
  tsconfigRootDir: process.cwd(), //Node.js 进程的当前工作目录
});
