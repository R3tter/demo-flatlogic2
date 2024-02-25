import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Redirect } from 'react-router-dom';
import { css } from 'aphrodite/no-important';

import { useRoutes } from 'hooks';
import { Sidebar, Header } from './components';

import { routes } from './routes';
import * as styles from './style';

export const App = () => {
  const { t } = useTranslation(['common']);

  const [open, setOpen] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);

  const toggleHoverSidebar = useCallback(state => () => setHoverOpen(state), []);
  const toggleSidebar = useCallback(() => setOpen(prev => !prev), []);

  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${VERSION}`, 'color: cornflowerblue; font-size: 13px;');
  }, []);
  return (
    <div className={css(styles.regular.app)}>
      <Sidebar open={open || hoverOpen} toggleSidebar={toggleHoverSidebar} />
      <div className={css(styles.regular.content)}>
        <Header toggleSidebar={toggleSidebar} />
        <Switch>
          {useRoutes(routes)}
          <Redirect to="/main" />
        </Switch>
      </div>
    </div>
  );
};
