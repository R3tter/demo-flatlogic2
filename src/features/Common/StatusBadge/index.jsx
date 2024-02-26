import { memo } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import * as styles from './style';

export const StatusBadge = memo(({ status, label }) => <div className={css(styles.root(status)._)}>{label}</div>);

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

StatusBadge.displayName = 'StatusBadge';
