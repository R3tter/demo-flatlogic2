import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'aphrodite/no-important';

import { navigationLinks } from './constants';
import { NavItem } from './components';
import * as styles from './style';

export const Sidebar = memo(() => {
  const { t } = useTranslation(['sideBar']);

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(state => () => setExpanded(state), []);
  const navigationJSX = useMemo(
    () => navigationLinks.map(item => <NavItem key={item.href} expanded={expanded} {...item} />),
    [expanded]
  );

  return (
    <div
      className={css(styles.root(expanded)._)}
      onMouseEnter={toggleExpanded(true)}
      onMouseLeave={toggleExpanded(false)}
    >
      <div className={css(styles.regular.container)}>
        <span className={css(styles.title(expanded)._)}>{t('title')}</span>
        <div className={css(styles.regular.navigationList)}>{navigationJSX}</div>
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';
