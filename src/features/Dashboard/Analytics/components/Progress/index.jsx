import { memo } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import * as styles from './style';
import { colors } from 'constants/styles';

export const Progress = memo(({ color = colors.blue.dark, progress }) => (
  <div className={css(styles.regular.root)}>
    <div className={css(styles.regular.backdrop)} />
    <div className={css(styles.progress(progress, color)._)} />
  </div>
));

Progress.propTypes = {
  color: PropTypes.string,
  progress: PropTypes.string
};

Progress.displayName = 'Progress';
