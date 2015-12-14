var 	gulp = require('gulp'),
		sass = require('gulp-ruby-sass'),
		notify = require("gulp-notify"),
		bower = require('gulp-bower'),
        minifyCss = require('gulp-minify-css');

var config = {
    sassPath: './resources/sass',
    bowerDir: './bower_components'
}		

gulp.task('default', function() {
		
});


gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('iconsFa', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});


gulp.task('css', function() {
    return sass(config.sassPath + '/style.scss')
    .on('error', notify.onError(function (error) {
                return "Error: " + error.message;
            })
    )
    .pipe(minifyCss())
    .pipe(gulp.dest('./public/css'));
});