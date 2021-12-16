import {
  task, src, dest, watch,
} from 'gulp';
import autoprefixer from 'gulp-autoprefixer';

task('styles', () => {
  src('css/*.css')
    .pipe(autoprefixer())
    .pipe(dest('build'));
});

task('watch', () => {
  watch('css/*.css', ['styles']);
});
