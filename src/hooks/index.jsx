import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { pageCategories } from 'constants/index';

export const useRoutes = routes => {
  const isAuth = true;
  return routes.map((route, i) => {
    const { pageCategory, path } = route;
    switch (pageCategory) {
      case pageCategories.private:
        return !isAuth ? (
          <Redirect key={i} from={path} to="/auth" />
        ) : (
          <Route key={i} {...route} component={route.component} />
        );
      case pageCategories.public:
        return !isAuth ? (
          <Route key={i} {...route} component={route.component} />
        ) : (
          <Redirect key={i} from={path} to="/main/" />
        );
    }
  });
};
