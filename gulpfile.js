var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-ruby-sass');
var src = './src/public';

gulp.task('sass', function() {
    return sass(src+'/styles/')
        .on('error',function(err){
            console.error('Error',err.message)
        })
        .pipe(gulp.dest(src+'/styles/'))
        .pipe(reload({ stream:true }));
});

gulp.task('serve',function(){ 
    browserSync(
        {
            server: {
              baseDir: src + '/../'
            }
        }
    );
    gulp.watch(src+'/styles/*.scss', ['sass']);
    
    // gulp.watch('./'+config.app+'/**.*').on('change',reload);
})

gulp.task('default', function() {
    // place code for your default task here
});