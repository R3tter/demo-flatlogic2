import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { css } from 'aphrodite/no-important';

import * as styles from './style';

export const Breadcrumbs = memo(() => {
  const {
    location: { pathname }
  } = useHistory();

  const arrLinks = useMemo(() => pathname.split('/'), [pathname]);

  const dynamicItems = useMemo(
    () =>
      arrLinks.map((item, i) => {
        const isLast = arrLinks.length - 1 === i;
        return (
          <>
            <Link key={item} to={`/${item}`} className={css(styles.item(isLast)._)}>
              {item}
            </Link>
            {!isLast && <span> > </span>}
          </>
        );
      }),
    [arrLinks]
  );

  return (
    <div className={css(styles.regular.root)}>
      <span>YOU ARE HERE</span>
      <span> > </span>
      <span>App</span>
      {dynamicItems}
    </div>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';
