import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3001,
      // Proxy API requests to Rust backend
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:3000',
          changeOrigin: true,
        },
        '/assets/public': {
          target: env.VITE_API_URL || 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
    plugins: [
      // MDX for documentation
      { 
        enforce: 'pre',
        ...mdx({
          remarkPlugins: [
            remarkFrontmatter,
            [remarkMdxFrontmatter, { name: 'frontmatter' }],
            remarkGfm
          ]
        })
      },
      // Paraglide for i18n
      paraglideVitePlugin({
        project: './project.inlang',
        outdir: './src/paraglide',
        emitTsDeclarations: true,
        strategy: ['cookie', 'preferredLanguage', 'baseLocale'],
        cookieName: 'NIBLEAF_LOCALE',
      }),
      // Tailwind CSS
      tailwindcss(),
      // React
      react({ compiler: true }),
    ],
    build: {
      outDir: '../dist/frontend',
      emptyOutDir: true,
      sourcemap: true,
    },
  };
});
