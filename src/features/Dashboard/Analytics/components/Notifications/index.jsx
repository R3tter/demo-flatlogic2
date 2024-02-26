import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import * as styles from './style';

export const Notifications = memo(({ data }) => {
  const { t } = useTranslation(['analytics']);

  const contentJSX = useMemo(
    () =>
      data.map(({ icon: { image: Image, color }, text }, i) => (
        <div className={css(styles.regular.notification)} key={`${text}_${i}`}>
          <Image className={css(styles.icon(color)._)} />
          <span className={css(styles.regular.notificationText)}>{text}</span>
        </div>
      )),
    [data]
  );

  return (
    <div className={css(styles.regular.root)}>
      <div className={css(styles.regular.header)}>
        <span className={css(styles.regular.title)}>{t('notificationTitle')}</span>
        <span className={css(styles.regular.counter)}>{data.length}</span>
      </div>
      <div className={css(styles.regular.container)}>{contentJSX}</div>
    </div>
  );
});

Notifications.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: {
        image: PropTypes.element,
        color: PropTypes.string
      },
      text: PropTypes.string
    })
  ).isRequired
};

Notifications.displayName = 'Notifications';
