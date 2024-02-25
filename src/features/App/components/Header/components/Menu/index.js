import { memo, useMemo } from 'react';
import { css } from 'aphrodite/no-important';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import { PopOver } from 'Common';

import * as styles from './style';

export const Menu = memo(() => {
  const contentJSX = useMemo(
    () => (
      <div className={css(styles.regular.root)}>
        <span className={css(styles.regular.item)}>
          <LogoutIcon className={css(styles.regular.itemIcon)} />
          Log out
        </span>
      </div>
    ),
    []
  );

  return (
    <PopOver content={contentJSX}>
      <SettingsIcon className={css(styles.regular.icon)} />
    </PopOver>
  );
});

Menu.displayName = 'Menu';
