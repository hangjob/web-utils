import {  defineConfig } from 'tsup';

export default defineConfig([
    {
        format: ['esm', 'cjs', 'iife'],
        entry: ['./example/index.js'],
        outDir: 'lib',
        platform: 'neutral',
        globalName: 'fy',
        outExtension({ format }) {
            if (format === 'iife') return { js: '.browser.js' };
            return { js: `.${format}.js` };
        },
        minify: true,
        sourcemap: true,
        shims: true,
        clean: true,
        dts: true,
    }
]);
