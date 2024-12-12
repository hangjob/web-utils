import {  defineConfig } from 'tsup';

export default defineConfig([
    {
        format: ['esm', 'cjs', 'iife'], // 指定输出的模块格式。常见的格式有 esm（ES 模块）、cjs（CommonJS）、iife（立即执行函数表达式）等
        entry: ['./example/index.js'], // 指定项目的入口文件。可以是一个或多个文件路径
        outDir: 'lib', // 指定输出文件的目录
        platform: 'neutral', // 指定目标平台。常见的值有 neutral（中立平台，适用于所有环境）、browser（浏览器环境）、node（Node.js 环境）
        globalName: 'WebUtils', //当输出格式为 iife 时，指定全局变量的名称
        outExtension({ format }) { // 自定义输出文件的扩展名。接收一个对象参数，包含当前的格式信息
            if (format === 'iife') return { js: '.browser.js' };
            return { js: `.${format}.js` };
        },
        minify: true, // 是否启用代码压缩
        sourcemap: true, // 是否生成源映射文件
        shims: true, // 是否启用 polyfills 和 shims，以确保兼容性
        clean: true,  // 清理输出目录
        dts: true, // 是否生成 TypeScript 声明文件
    }
]);
