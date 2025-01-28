import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    base: './',
    plugins: [
        react(),
        {
            name: 'load+transform-js-files-as-jsx',
            enforce: 'pre',
            async transform(code, id) {
                if (!id.match(/src\/.*\.js$/)) {
                    return null;
                }

                // Use the exposed transform from vite, instead of directly
                // transforming with esbuild
                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic', // 👈 this is important
                });
            },
        }
    ],
    resolve: {
        alias: {
            components: import.meta.resolve('./src/components')
        }
    },
    build: {
        outDir: 'build',
    },
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer
            ],
        },
    },
});