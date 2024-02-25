import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import MenuIcon from '@mui/icons-material/Menu';
import CachedIcon from '@mui/icons-material/Cached';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import { Input } from 'FormComponents';

import { Menu } from './components';
import * as styles from './style';

export const Header = memo(({ toggleSidebar }) => {
  const [value, setValue] = useState('');

  const handleSearchChange = useCallback(({ target: { value } }) => setValue(value), []);

  return (
    <div className={css(styles.regular.root)}>
      <div className={css(styles.regular.left)}>
        <div className={css(styles.regular.controls)}>
          <span title="Turn on/of sidebar collapsing" style={{ display: 'flex' }}>
            <MenuIcon className={css(styles.regular.icon)} onClick={toggleSidebar} />
          </span>
          <CachedIcon className={css(styles.regular.icon)} />
          <CloseIcon className={css(styles.regular.icon)} />
        </div>
        <Input icon={SearchIcon} placeholder="Search Dashboard" onChange={handleSearchChange} value={value} />
      </div>
      <Menu />
    </div>
  );
});

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

Header.displayName = 'Header';
