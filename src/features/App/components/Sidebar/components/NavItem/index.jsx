import { memo, useCallback, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import * as styles from './style';
import { colors } from 'constants/styles';

export const NavItem = memo(({ subItems, href, icon: Icon, title, subTitle, expanded: sideBarExpanded }) => {
  const [expanded, setExpanded] = useState(false);

  const isSelected = useMemo(() => window.location.href.includes(href), [href, window.location.href]);
  const handleExpand = useCallback(() => subItems?.length && setExpanded(prev => !prev), [subItems]);

  const subItemsJSX = useMemo(
    () =>
      (subItems ?? []).map(({ title, href }) => (
        <div key={href} className={css(styles.regular.subItem)}>
          <NavLink
            to={href}
            className={css(styles.regular.subLink)}
            activeClassName={css(styles.regular.subLinkActive)}
          >
            {title}
          </NavLink>
        </div>
      )),
    [subItems]
  );

  return (
    <div className={css(styles.regular.root)}>
      <div className={css(styles.regular.mainContainer)} onClick={handleExpand}>
        <div className={css(styles.regular.mainLeft)}>
          <div className={css(styles.imageContainer(isSelected)._)}>
            <Icon className={css(styles.icon(isSelected)._)} />
          </div>
          {sideBarExpanded && (
            <span className={css(styles.regular.mainTitle)}>
              {title}
              {subTitle && (
                <span className={css(styles.regular.subTitle)} style={{ color: subTitle.color ?? colors.orange }}>
                  {subTitle.text}
                </span>
              )}
            </span>
          )}
        </div>
        {!!subItemsJSX.length && <ExpandMoreIcon className={css(styles.expandIcon(expanded)._)} />}
      </div>
      {expanded && sideBarExpanded && <div className={css(styles.regular.childContainer)}>{subItemsJSX}</div>}
    </div>
  );
});

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string
  }),
  href: PropTypes.string,
  icon: PropTypes.any.isRequired,
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ),
  expanded: PropTypes.bool
};

NavItem.displayName = 'NavItem';
