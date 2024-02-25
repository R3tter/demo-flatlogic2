import { memo } from 'react';
import { css } from 'aphrodite/no-important';
import { Switch, Redirect } from 'react-router-dom';

import { useRoutes } from 'hooks';

import { routes } from './routes';
import * as styles from './style';

export const Dashboard = memo(() => {
  return (
    <div className={css(styles.regular.root)}>
      <Switch>
        {useRoutes(routes)}
        <Redirect to="/main/analytics" />
      </Switch>
    </div>
  );
});

Dashboard.displayName = 'Dashboard';
