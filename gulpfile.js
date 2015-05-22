var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-ruby-sass');
var config = {
    app: 'src',
    dist: 'public'
}

gulp.task('sass', function() {
    return gulp.src('dist/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/styles/'))
        .pipe(reload({ stream:true }));
});

gulp.task('serve',function(){
    browserSync(
        {
            server: {
              baseDir: './src',
              index: '../index.html'
            }
        }
    );
    //gulp.watch('dist/styles/*.scss', ['sass']);
    gulp.watch('index.html').on('change',reload);
    gulp.watch('src/**.*').on('change',reload);
})

gulp.task('default', function() {
    // place code for your default task here
});