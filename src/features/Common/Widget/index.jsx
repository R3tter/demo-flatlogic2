import { memo, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Cancel from 'images/icons/cancel.svg';

import * as styles from './style';

export const Widget = memo(({ title, collapsible, closable, children, customStyles }) => {
  const [visible, setVisible] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [height, setHeight] = useState('auto');

  const handleCollapse = useCallback(() => setCollapsed(prev => !prev), []);
  const handleClose = useCallback(() => setVisible(false), []);

  const containerRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const header = useMemo(
    () => (
      <div className={css(styles.regular.head)}>
        <span className={css(styles.regular.title)}>{title}</span>
        <div className={css(styles.regular.controls)}>
          {collapsible && <ExpandMoreIcon className={css(styles.collapseIcon(collapsed)._)} onClick={handleCollapse} />}
          <Cancel className={css(styles.regular.icon)} onClick={handleClose} />
        </div>
      </div>
    ),
    [collapsible, closable, collapsed, title]
  );

  return (
    <div className={css(styles.root(!visible, customStyles)._)}>
      {header}
      <div ref={containerRef} className={css(styles.container(collapsed, collapsible ? height : 'auto')._)}>
        {children}
      </div>
    </div>
  );
});

Widget.propTypes = {
  title: PropTypes.string,
  collapsible: PropTypes.bool,
  closable: PropTypes.bool,
  children: PropTypes.node,
  customStyles: PropTypes.object
};

Widget.defaultProps = {
  collapsible: false,
  closable: true
};

Widget.displayName = 'Widget';
