// Gulp.js configuration
'use strict';

const productname = 'now-ui-dashboard',
      version = 'v1.0.0';

const

  // source and build folders
  dir = {
    src         : '_site/',
    build       : 'dist/'
  },

  // Gulp and plugins
  gulp          = require('gulp'),
  gutil         = require('gulp-util'),
  newer         = require('gulp-newer'),
  imagemin      = require('gulp-imagemin'),
  sass          = require('gulp-sass'),
  postcss       = require('gulp-postcss'),
  deporder      = require('gulp-deporder'),
  concat        = require('gulp-concat'),
  stripdebug    = require('gulp-strip-debug'),
  uglify        = require('gulp-uglify'),
  prettify      = require('gulp-jsbeautifier'),
  clean         = require('gulp-clean'),
  zip           = require('gulp-zip');
;

// Browser-sync
var browsersync = false;

// Move HTML settings
const move_html = {
  src           : dir.src + '**/*.html',
  build         : dir.build
};

// copy HTML files
gulp.task('move_html', () => {
  return gulp.src(move_html.src)
    .pipe(newer(move_html.build))
    .pipe(gulp.dest(move_html.build));
});

// Move SASS folder
const move_sass = {
    src          : 'assets/_scss/**/*.scss',
    build        : dir.build + 'assets/sass/',
}

// copy Sass files
gulp.task('move_sass', () => {
  return gulp.src(move_sass.src)
    .pipe(newer(move_sass.build))
    .pipe(gulp.dest(move_sass.build));
});

// copy SASS parent
gulp.task('move_sass_parent', () => {
  return gulp.src('assets/css/*.scss')
    .pipe(newer(move_sass.build))
    .pipe(gulp.dest(move_sass.build));
});

// copy full assets
gulp.task('move_js', () => {
  return gulp.src('assets/js/**/*')
    .pipe(newer(dir.build + '/assets/js/'))
    .pipe(gulp.dest(dir.build + '/assets/js/'));
});

gulp.task('move_css', () => {
  return gulp.src('_site/assets/css/**/*')
    .pipe(newer(dir.build + '/assets/css/'))
    .pipe(gulp.dest(dir.build + '/assets/css/'));
});


gulp.task('move_fonts', () => {
  return gulp.src('_site/assets/fonts/**/*')
    .pipe(newer(dir.build + '/assets/fonts/'))
    .pipe(gulp.dest(dir.build + '/assets/fonts/'));
});


gulp.task('clean_scss', function () {
    return gulp.src(dir.build + '/assets/css/now-ui-dashboard.scss', {read: false})
        .pipe(clean());
});

// image settings
const images = {
  src         : dir.src + 'assets/img/**/*',
  build       : dir.build + 'assets/img/'
};

// image processing
gulp.task('images', () => {
  return gulp.src(images.src)
    .pipe(newer(images.build))
    .pipe(imagemin({ optimizationLevel: 8 }))
    .pipe(gulp.dest(images.build));
});

// CSS settings
var css = {
  src         : dir.src + 'scss/style.scss',
  watch       : dir.src + 'scss/**/*',
  build       : dir.build,
  sassOpts: {
    outputStyle     : 'nested',
    imagePath       : images.build,
    precision       : 3,
    errLogToConsole : true
  },
  processors: [
    require('postcss-assets')({
      loadPaths: ['images/'],
      basePath: dir.build,
      baseUrl: '/wp-content/themes/wptheme/'
    }),
    require('autoprefixer')({
      browsers: ['last 2 versions', '> 2%']
    }),
    require('css-mqpacker'),
    require('cssnano')
  ]
};

// CSS processing
gulp.task('css', ['images'], () => {
  return gulp.src(css.src)
    .pipe(sass(css.sassOpts))
    .pipe(postcss(css.processors))
    .pipe(gulp.dest(css.build))
    .pipe(browsersync ? browsersync.reload({ stream: true }) : gutil.noop());
});

// Zip files up
gulp.task('zip', function () {
 return gulp.src('dist/**/*')
  .pipe(zip(productname + '-' + version + '.zip'))
  .pipe(gulp.dest('.'));
});

// gulp.task('prettify', function() {
//   gulp.src('dist/**/*.html')
//     .pipe(prettify({indent_char: ' ', indent_size: 2}))
//     .pipe(gulp.dest('dist/'))
// });

gulp.task('prettify', function() {
  gulp.src(['_site/**/*.html'])
    .pipe(prettify())
    .pipe(gulp.dest('dist'));
});


// run all tasks
gulp.task('build', ['move_html', 'move_css','move_js','move_sass_parent','move_sass', 'images', 'move_fonts','clean_scss']);
