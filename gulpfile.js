const gulp = require('gulp');
const zip = require('gulp-zip');
 
gulp.task('repartidor',function(){
    return gulp.src('src/Repartidor/*')
        .pipe(zip('repartidor.zip'))
        .pipe(gulp.dest('dist'))
})

gulp.task('restaurante',function(){
    return gulp.src('src/Restaurante/*')
        .pipe(zip('restaurante.zip'))
        .pipe(gulp.dest('dist'))
})

gulp.task('esb',function(){
    return gulp.src('src/ESB/*')
        .pipe(zip('esb.zip'))
        .pipe(gulp.dest('dist'))
})

gulp.task('cliente',function(){
    return gulp.src('src/Cliente/*')
        .pipe(zip('cliente.zip'))
        .pipe(gulp.dest('dist'))
})


gulp.task('default', gulp.series('repartidor', 'restaurante', 'esb', 'cliente'))