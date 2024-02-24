import { Analytics } from 'Analytics';
import { pageCategories } from 'constants';

export const routes = [
  {
    path: '/main/analytics',
    component: Analytics,
    exact: false,
    pageCategory: pageCategories.private
  }
];
