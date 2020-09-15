import { reset } from 'stitches-reset';
import { css } from './stitches.config';

css.global(reset);
css.global({
  body: { margin: '0' },
});

export * from './components';
