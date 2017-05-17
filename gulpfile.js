var gulp = require('gulp');
var source = '_sass/**/*.scss';
var destination = '_gulped-sass';

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('autoprefixer', function () {
	return gulp.src(source)
    	.pipe(postcss([autoprefixer({
    		browsers: ['last 2 versions']
    	})], {
    		syntax: require('postcss-scss')
    	}))
        .pipe(gulp.dest(destination));
});
