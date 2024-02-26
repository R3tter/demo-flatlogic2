import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';

import { colors } from 'constants/styles';

import * as styles from './style';

export const Statistic = memo(({ title, color, data }) => {
  const { t } = useTranslation(['analytics']);

  const getIcon = useCallback(
    positive =>
      positive ? (
        <ArrowOutwardOutlinedIcon className={css(styles.regular.positive)} />
      ) : (
        <CallReceivedOutlinedIcon className={css(styles.regular.negative)} />
      ),
    []
  );

  return (
    <div className={css(styles.regular.root)}>
      <div className={css(styles.regular.main)}>
        <p className={css(styles.regular.title)}>
          <span className={css(styles.circle(color)._)} />
          {title}
        </p>
        <span className={css(styles.regular.total)}>{data.total}</span>
      </div>
      <div className={css(styles.regular.additional)}>
        <div className={css(styles.regular.additionalItem)}>
          <p className={css(styles.regular.additionalValue)}>
            {data.registration.value}
            {getIcon(data.registration.positive)}
          </p>
          <span className={css(styles.regular.additionalLabel)}>{t('statistic.reg')}</span>
        </div>
        <div className={css(styles.regular.additionalItem)}>
          <p className={css(styles.regular.additionalValue)}>
            {data.bounce.value}
            {getIcon(data.bounce.positive)}
          </p>
          <span className={css(styles.regular.additionalLabel)}>{t('statistic.bounce')}</span>
        </div>
      </div>
    </div>
  );
});

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  data: PropTypes.shape({
    total: PropTypes.string,
    registration: PropTypes.shape({
      value: PropTypes.string,
      positive: PropTypes.bool
    }),
    bounce: PropTypes.shape({
      value: PropTypes.string,
      positive: PropTypes.bool
    })
  }).isRequired
};

Statistic.defaultProps = {
  color: colors.blue.dark
};

Statistic.displayName = 'Statistic';
