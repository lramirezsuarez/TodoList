var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function(){ //Convertir Sass a CSS.
  return gulp.src('Todo/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('Todo/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('reloadBrowser', function () { //Recargar navegador
    browserSync.reload();
});

gulp.task('watch', function(){ //Tarea de observador, verifica si algun archivo cambio para realizar la tarea.
    gulp.watch('Todo/sass/*.scss',['sass']); //Verifica archivos sass y los cambia a css.
    gulp.watch(['Todo/js/*.js'], ['reloadBrowser']); //Verifica algun cambio en el js y recarga el navegador.
    gulp.watch(['Todo/*.html'], ['reloadBrowser']); //Verifica algun cambio en los archivos html y recarga el navegador.
});

gulp.task('serve', function(){ //Monta el servidor local para sincronizar con el navegador.
    browserSync({
        server:{
            baseDir: ['Todo']
        }
    });

    gulp.start('watch'); //Ejecuta la tarea watch para verificar los cambios y ejecutar las tareas.
});

gulp.task('default', ['serve']); //Funcion por defecto para ejecutar con el comando gulp.