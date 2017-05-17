var gulp = require('gulp');
var source = '_sass/**/*.scss';
var destination = '_gulped-sass';

gulp.task('default', function() {
	gulp.watch(source, ['autoprefixer']);
});

gulp.task('autoprefixer', function () {

	var postcss = require('gulp-postcss');
	var autoprefixer = require('autoprefixer');

	return gulp.src(source)
    	.pipe(postcss([autoprefixer({
    		browsers: ['last 2 versions']
    	})], {
    		syntax: require('postcss-scss')
    	}))
        .pipe(gulp.dest(destination));
});
