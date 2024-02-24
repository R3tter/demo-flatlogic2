import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import * as styles from './style';

export const Input = memo(({ placeholder, value, onChange, onSubmit, icon: Icon }) => {
  const { t } = useTranslation(['common']);
  const [focused, setFocused] = useState(false);

  const handleKeyDown = ({ key }) => {
    key === 'Enter' && onSubmit();
  };

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className={css(styles.root(focused)._)}>
      {Icon && <Icon className={css(styles.regular.icon)} />}
      <input
        type="text"
        className={css(styles.regular.input)}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        value={value}
        placeholder={placeholder ?? t('inputPlaceholder')}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
});

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.any.isRequired,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string
};

Input.displayName = 'Input';
