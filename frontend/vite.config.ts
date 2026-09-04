import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig, loadEnv } from 'vite';

const packagesDir = path.resolve(__dirname, '../packages');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiTarget = env.VITE_API_URL || 'http://localhost:6000';

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        // @cms/* — resolved directly to package sources (no npm publish needed)
        '@cms/server/rpc': path.resolve(packagesDir, 'server/src/rpc.ts'),
        '@cms/design-system/globals.css': path.resolve(packagesDir, 'design-system/src/styles/globals.css'),
        '@cms/design-system/theme': path.resolve(packagesDir, 'design-system/src/theme/theme-provider.tsx'),
        '@cms/design-system/brand': path.resolve(packagesDir, 'design-system/src/brand/index.ts'),
        '@cms/design-system/lib/utils': path.resolve(packagesDir, 'design-system/src/lib/utils.ts'),
        '@cms/design-system/lib': path.resolve(packagesDir, 'design-system/src/lib'),
        '@cms/design-system/hooks': path.resolve(packagesDir, 'design-system/src/hooks'),
        '@cms/design-system/components': path.resolve(packagesDir, 'design-system/src/components'),
        '@cms/design-system': path.resolve(packagesDir, 'design-system/src/theme/theme-provider.tsx'),
        '@cms/i18n/react': path.resolve(packagesDir, 'i18n/src/react.ts'),
        '@cms/i18n/site': path.resolve(packagesDir, 'i18n/src/site.ts'),
        '@cms/i18n/locales': path.resolve(packagesDir, 'i18n/src/locales.ts'),
        '@cms/i18n/standalone': path.resolve(packagesDir, 'i18n/src/standalone.ts'),
        '@cms/i18n/email': path.resolve(packagesDir, 'i18n/src/email.ts'),
        '@cms/i18n/messages': path.resolve(packagesDir, 'i18n/src/paraglide/messages.js'),
        '@cms/i18n/runtime': path.resolve(packagesDir, 'i18n/src/paraglide/runtime.js'),
        '@cms/i18n': path.resolve(packagesDir, 'i18n/src/index.ts'),
        '@cms/auth/client': path.resolve(packagesDir, 'auth/src/client.ts'),
        '@cms/auth/providers': path.resolve(packagesDir, 'auth/src/providers.ts'),
        '@cms/auth': path.resolve(packagesDir, 'auth/src/client.ts'),
        '@cms/shared/addons': path.resolve(packagesDir, 'shared/src/addons.ts'),
        '@cms/shared/site': path.resolve(packagesDir, 'shared/src/site.ts'),
        '@cms/shared/themes': path.resolve(packagesDir, 'shared/src/themes.ts'),
        '@cms/shared/theme-repository': path.resolve(packagesDir, 'shared/src/theme-repository.ts'),
        '@cms/shared/rbac': path.resolve(packagesDir, 'shared/src/rbac.ts'),
        '@cms/shared/constants': path.resolve(packagesDir, 'shared/src/constants.ts'),
        '@cms/shared/ids': path.resolve(packagesDir, 'shared/src/ids.ts'),
        '@cms/shared/integrations': path.resolve(packagesDir, 'shared/src/integrations.ts'),
        '@cms/shared/redirects': path.resolve(packagesDir, 'shared/src/redirects.ts'),
        '@cms/shared/crypto': path.resolve(packagesDir, 'shared/src/crypto.ts'),
        '@cms/shared/documentation-components': path.resolve(packagesDir, 'shared/src/documentation-components.ts'),
        '@cms/shared/mcp': path.resolve(packagesDir, 'shared/src/mcp.ts'),
        '@cms/shared/utils': path.resolve(packagesDir, 'shared/src/utils.ts'),
        '@cms/shared': path.resolve(packagesDir, 'shared/src/index.ts'),
        '@cms/validators/addons': path.resolve(packagesDir, 'validators/src/addons.ts'),
        '@cms/validators/redirects': path.resolve(packagesDir, 'validators/src/redirects.ts'),
        '@cms/validators/themes': path.resolve(packagesDir, 'validators/src/themes.ts'),
        '@cms/validators': path.resolve(packagesDir, 'validators/src/index.ts'),
        '@cms/usage': path.resolve(packagesDir, 'usage/src/index.ts'),
        '@cms/usage/*': path.resolve(packagesDir, 'usage/src'),
      },
    },

    server: {
      port: 3001,
      proxy: {
        '/api': { target: apiTarget, changeOrigin: true },
        '/assets/public': { target: apiTarget, changeOrigin: true },
      },
    },

    plugins: [
      { enforce: 'pre', ...mdx({ remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'frontmatter' }], remarkGfm] }) },
      tailwindcss(),
      react(),
    ],

    build: {
      outDir: '../dist/frontend',
      emptyOutDir: true,
      sourcemap: true,
    },
  };
});
