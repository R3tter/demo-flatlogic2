import { memo } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { useRoutes } from 'hooks';

import { routes } from './routes';

export const Dashboard = memo(() => {
  return <div>
    ASdaslkdjalskjdasd
    <Switch>
      {useRoutes(routes)}
      <Redirect to="/main/analytics" />
    </Switch>
  </div>
})


Dashboard.displayName = "Dashboard";
