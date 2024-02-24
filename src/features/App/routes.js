import { Dashboard } from 'src/features/Dashboard';
import { pageCategories } from 'constants/index';

export const routes = [
  {
    path: '/main',
    component: Dashboard,
    exact: false,
    pageCategory: pageCategories.private
  }
];
