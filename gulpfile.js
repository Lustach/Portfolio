let project_folder = 'dist'//output folder
let source_folder = 'src'//input
// todo svg
let path = {
	//output
	build: {
		html: project_folder + '/',
		css: project_folder + '/css/',
		js: project_folder + '/js/',
		img: project_folder + '/images/',
		fonts: project_folder + '/fonts/',
	},
	src: {
		html: source_folder + '/*.html',
		css: source_folder + '/css/style.less',
		js: source_folder + '/js/index.js',
		img: source_folder + '/images/**/*.{jpg,png,webp,svg}',
		fonts: source_folder + '/fonts/*.ttf',
	},
	watch: {
		html: source_folder + '/**/*.html',
		css: source_folder + '/css/**/*.less',
		js: source_folder + '/js/**/*.js',
		img: source_folder + '/images/**/*.{jpg,png,webp,svg}',
	},
	clean: './' + project_folder + '/'
}

let { src, dest } = require('gulp'),
	gulp = require('gulp'),
	browsersync = require('browser-sync').create(),
	fileinclude = require('gulp-file-include'),
	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	group_media = require('gulp-group-css-media-queries'),// группирует media queries в конце файла - важно для производительности
	clean_css = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify-es').default,
	imagemin = require('gulp-imagemin'),
	webp = require('gulp-webp')

function browserSync(params) {
	browsersync.init({
		server: {
			baseDir: './' + project_folder + '/'
		},
		port: 4000,
		notify: false
	})
}
function html() {
	return src(path.src.html).pipe(fileinclude()).pipe(dest(path.build.html)).pipe(browsersync.stream())
}
function js() {
	return src(path.src.js,{ sourcemaps: true }).pipe(fileinclude()).pipe(dest(path.build.js))// две выгрузки
	.pipe(uglify())// две выгрузки
	.pipe(rename({
		extname: '.min.js'
	})).pipe(dest(path.build.js,{ sourcemaps: true })).pipe(browsersync.stream())
}
function css() {
	return src(path.src.css).pipe(less({
			outputStyle: 'expanded'
		})
	).pipe(group_media()).pipe(autoprefixer({
		overrideBrowserslist: ['last 5 versions'],
		cascade: true
	})).pipe(dest(path.build.css))// две выгрузки
	.pipe(clean_css())//сжать
	// .pipe(rename({
	// 	extname: '.min.css'
	// }))
	.pipe(dest(path.build.css)).pipe(browsersync.stream())
}
function images() {
	return src(path.src.img)
	.pipe(imagemin([

	]))
	.pipe(dest(path.build.img))
	// return src(path.src.img)
	// .pipe(webp({
	// 	quality: 70
	// }))
	// .pipe(dest(path.build.img)).pipe(dest(path.src.img)).pipe(imagemin({
	// 	progressive: true,
	// 	svgoPlugins: [{ removeViewBox: false }],
	// 	interlaced: true,
	// 	optimizationLevel: 3 //0 to 7
	// })).pipe(fileinclude()).pipe(dest(path.build.img)).pipe(browsersync.stream())
}
//для обработки файлов котоырые подключаются @@include
function watchFiles(params) {
	gulp.watch([path.watch.html], html)
	gulp.watch([path.watch.css], css)
	gulp.watch([path.watch.js], js)
	gulp.watch([path.watch.img], images)
}

let build = gulp.series(html, gulp.parallel(js, css, html, images))
let watch = gulp.parallel(build, watchFiles, browserSync)
exports.js = js
exports.css = css
exports.html = html
exports.images = images
exports.build = build
exports.watch = watch
exports.default = watch

// const {src, dest, series, watch} = require('gulp')
// const sass = require('gulp-sass')
// const csso = require('gulp-csso')
// const include = require('gulp-file-include')
// const htmlmin = require('gulp-htmlmin')
// const del = require('del')
// const concat = require('gulp-concat')
// const autoprefixer = require('gulp-autoprefixer')
// const sync = require('browser-sync').create()
//
// function html() {
// 	return src('src/**.html')
// 	.pipe(include({
// 		prefix: '@@'
// 	}))
// 	.pipe(dest('dist'))
// }
