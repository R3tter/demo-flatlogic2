import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'aphrodite/no-important';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { PopOver } from 'Common';

import * as styles from './style';

export const Menu = memo(() => {
  const { t } = useTranslation(['common']);

  const contentJSX = useMemo(
    () => (
      <div className={css(styles.regular.root)}>
        <span className={css(styles.regular.item)}>
          <PersonOutlineOutlinedIcon className={css(styles.regular.itemIcon)} />
          {t('account')}
        </span>
        <span className={css(styles.regular.divider)} />
        <span className={css(styles.regular.item)}>
          <LogoutIcon className={css(styles.regular.itemIcon)} />
          {t('logOut')}
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
