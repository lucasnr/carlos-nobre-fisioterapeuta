const { src, dest, series, parallel } = require('gulp'),
	clean = require('gulp-clean'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	htmlmin = require('gulp-htmlmin');

function cleanDist() {
	return src('dist/', { read: false, allowEmpty: true }).pipe(clean());
}

function copyDist() {
	return src(['src/**/*', '!src/assets/js/**', '!src/assets/sass/**']).pipe(
		dest('dist/')
	);
}

function buildJs() {
	return src('src/**/*.js')
		.pipe(
			babel({
				presets: ['@babel/preset-env'],
			})
		)
		.pipe(uglify())
		.pipe(dest('dist/'));
}

function buildHtml() {
	return src('src/**/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest('dist/'));
}

exports.default = series(cleanDist, copyDist, parallel(buildHtml, buildJs));
