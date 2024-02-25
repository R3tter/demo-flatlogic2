import { memo, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import * as styles from './style';

export const PopOver = memo(({ children, content }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const toggleState = useCallback(() => setOpen(prev => !prev), []);

  const handleClickOutside = useCallback(({ target }) => {
    const isInside = ref.current.contains(target);
    !isInside && setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className={css(styles.regular.root)} onClick={e => e.stopPropagation()}>
      <div className={css(styles.regular.childContainer)} onClick={toggleState}>
        {children}
      </div>
      {open && <div className={css(styles.regular.content)}>{content}</div>}
    </div>
  );
});

PopOver.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.element.isRequired
};

PopOver.displayName = 'PopOver';
