var
    gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require("gulp-notify"),
	bower = require('gulp-bower'),
    jade = require('gulp-jade'),
    minifyCss = require('gulp-minify-css'),
    cssScss = require('gulp-css-scss'),
    rename = require("gulp-rename");

var config = {
    sassPath: './src/sass',
    bowerDir: './bower_components'
}

/*default task do nothing*/		
gulp.task('default', function() {
		console.log('default task');
});

/*watch project source files an build automatically when changinging*/
gulp.task('watch', function () {
   gulp.watch('src/**/*.*', ['build']);
});

/*build sequence*/
gulp.task('build', ['css','html','js_app'], function() {
		console.log('building here');
});

/*build ALL css*/
gulp.task('css', ['css_scss','scss'], function() {
});
/*build some scss from plain css*/
gulp.task('css_scss', function() {
    return gulp.src(config.bowerDir + '/bootstrap-datepicker/dist/css/bootstrap-datepicker.css')
    .pipe(cssScss())
    .pipe(rename('_bootstrap-datepicker.scss'))
    .pipe(gulp.dest('src/sass/vendors'));
});
/*combine scss*/
gulp.task('scss', function() {
    return sass(config.sassPath + '/main.scss',{
        loadPath:[
            config.bowerDir + '/bootstrap-sass/assets/stylesheets',
            config.bowerDir + '/font-awesome/scss',
            config.bowerDir + '/bootstrap-datepicker/dist/css/'
        ]
    })
    .on('error', notify.onError(function (error) {
                return "Error: " + error.message;
            })
    )
    .pipe(minifyCss())
    .pipe(gulp.dest('./public/css'));
});

/*build html*/
gulp.task('html', function() {
    gulp.src('./src/tmpl/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'));
});

/*build js*/
gulp.task('js', ['js_app','js_jquery','js_jquery-ui','js_bootstrap','js_require','js_bootstrap-plugins','js_bootstrap-datepicker'], function() {
});

gulp.task('js_app', function() {
    return gulp.src('./src/js/**.*')
    .pipe(gulp.dest('./public/js/'));
});
gulp.task('js_jquery', function() {
    return gulp.src(config.bowerDir + '/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./public/js/'));
});
gulp.task('js_jquery-ui', function() {
    return gulp.src(config.bowerDir + '/jquery-ui/jquery-ui.min.js')
    .pipe(gulp.dest('./public/js/'));
});
gulp.task('js_bootstrap', function() {
    return gulp.src(config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.min.js')
    .pipe(gulp.dest('./public/js/'));
});
gulp.task('js_bootstrap-plugins', function() {
    return gulp.src(config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap/**.js')
    .pipe(gulp.dest('./public/js/bootstrap/'));
});
gulp.task('js_bootstrap-datepicker', function() {
    return gulp.src(config.bowerDir + '/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js')
    .pipe(gulp.dest('./public/js/bootstrap/'));
});
gulp.task('js_require', function() {
    return gulp.src(config.bowerDir + '/requirejs-plugins/lib/require.js')
    .pipe(gulp.dest('./public/js/'));
});





gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

/*update external*/
gulp.task('iconsFa', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});
