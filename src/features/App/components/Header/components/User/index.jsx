import { memo } from 'react';
import { css } from 'aphrodite/no-important';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

import * as styles from './style';

export const User = memo(() => (
  <div className={css(styles.regular.root)}>
    <div className={css(styles.regular.circle)}>
      <Person2OutlinedIcon className={css(styles.regular.userImage)} />
    </div>
    <span className={css(styles.regular.name)}>Admin</span>
    <div className={css(styles.regular.notificationCount)}>13</div>
  </div>
));

User.displayName = 'User';
