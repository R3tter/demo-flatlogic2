import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Redirect } from 'react-router-dom';
import { css } from 'aphrodite/no-important';

import { useRoutes } from 'hooks';
import { Sidebar } from './components';

import { routes } from './routes';
import * as styles from './style';

export const App = () => {
  const { t } = useTranslation(['common']);

  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${VERSION}`, 'color: cornflowerblue; font-size: 13px;');
  }, []);
  return (
    <div className={css(styles.regular.app)}>
      <Sidebar />
      <Switch>
        {useRoutes(routes)}
        <Redirect to="/main" />
      </Switch>
    </div>
  );
};
