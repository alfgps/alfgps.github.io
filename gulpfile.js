var gulp = require('gulp');
var hb = require('gulp-hb');
var jeditor = require("gulp-json-editor");
var webserver = require('gulp-webserver');

gulp.task('generar', function () {
    return gulp
        .src('./src/views/paginas/*.html')
        .pipe(hb({partials: './src/views/parciales/*.hbs',data: './src/views/datos.json'}))
        .pipe(gulp.dest('./web'));
});

gulp.task('json', function () {
    return gulp
        .src("./manifest.json")
  		.pipe(jeditor(function(json) {	json.version += 1; return json;	}))
  		.pipe(gulp.dest("./"));
});


gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      //livereload: true,
      directoryListing: true,
      open: true
    }));
});