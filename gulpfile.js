const {src, dest} = require('gulp');
const insert = require('gulp-insert');

function defaultTask(cb) {
    src('lib/index.cjs.js') // 指定要编辑的文件路径
        .pipe(insert.prepend('window = this;')) // 向文件开头插入指定的字符串
        .pipe(dest('lib')); // 指定输出目录
    cb();
}

exports.default = defaultTask
