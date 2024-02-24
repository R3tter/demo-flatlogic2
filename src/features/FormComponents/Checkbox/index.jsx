import PropTypes from 'prop-types';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { css } from 'aphrodite/no-important';
import * as styles from './style';

export const Checkbox = ({ value, onChange }) => (
  <label className={css(styles.regular.root)}>
    <input type="checkbox" checked={value} onChange={onChange} style={{ display: 'none' }} />
    {value ? (
      <CheckBoxIcon className={css(styles.regular.unchecked)} />
    ) : (
      <CheckBoxOutlineBlankIcon className={css(styles.regular.checked)} />
    )}
  </label>
);

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
