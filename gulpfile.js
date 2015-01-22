var gulp = require('gulp');
var replace = require('gulp-replace');

// var removeContent = new RegExp('.*Loop="([A-Za-z ]*)".*\n',"g");

var arr = [];

gulp.task('default', function(){
  gulp.src(['simple_data.txt'])
    // Remove header and footer lines
    // .pipe(replace(/<\?xml.*/g, ''))
    // .pipe(replace(/<.*resultset.*/g, ''))
    // .pipe(replace(removeContent, '$1\n'))
    .pipe(replace(/^(.*)(\r?\n)\1+$/g, ''))
    // .pipe(replace(/(.*)\n(\1)/g, function(str, a, b){
    //   if (a === b) {
    //     return a;
    //   }
    // }))
    .pipe(gulp.dest('build/'));
});
