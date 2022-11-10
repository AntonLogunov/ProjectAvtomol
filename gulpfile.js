const {src,dest,series,watch} = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const browserSync = require("browser-sync").create();

// all ccs from src to one file in dist
const styles = () => {
    return src('src/style/**/*.css')
        .pipe(concat('style.css'))
        .pipe(dest('dist/style'))
        .pipe(browserSync.stream());
}

const clean = () => {
    return del('dist')
}

const watchFile = () => {
    browserSync.init({
        server:{
            baseDir:'dist'
        }
    })
}

watch('src/style/**/*.css',styles);

exports.styles = styles;
exports.clean = clean;
exports.default = series(clean,styles,watchFile);
//exports.default = series(clean,styles,htmlMinify,svgSprites,images,scripts,resources,watchFile);
