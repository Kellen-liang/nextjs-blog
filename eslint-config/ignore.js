export function ignores() {
  return [
    {
      ignores: [
        '**/node_modules',
        '**/dist',
        '**/package-lock.json',
        '**/pnpm-lock.yaml',
        '**/output',
        '**/.next',
        '**/.vercel',
        '**/.idea',
        '**/.cache',
        '**/.output',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/eslint.config.js',
        '**/tailwind.config.js',
        '**/.stylelintrc.js',
        '**/src/components/ui/*',
        '**/*.mjs',
        '**/next-env.d.ts',
        // '**/eslint-config/**',
      ],
    },
  ];
}
