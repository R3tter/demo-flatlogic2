import { memo, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { css } from 'aphrodite/no-important';

import { navigationLinks } from './constants';
import { NavItem } from './components';
import * as styles from './style';

export const Sidebar = memo(({ open, toggleSidebar }) => {
  const { t } = useTranslation(['sideBar']);

  const navigationJSX = useMemo(
    () => navigationLinks.map(item => <NavItem key={item.href} expanded={open} {...item} />),
    [open]
  );

  return (
    <div className={css(styles.root(open)._)} onMouseEnter={toggleSidebar(true)} onMouseLeave={toggleSidebar(false)}>
      <div className={css(styles.regular.container)}>
        <span className={css(styles.title(open)._)}>{t('title')}</span>
        <div className={css(styles.regular.navigationList)}>{navigationJSX}</div>
      </div>
    </div>
  );
});

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

Sidebar.displayName = 'Sidebar';
