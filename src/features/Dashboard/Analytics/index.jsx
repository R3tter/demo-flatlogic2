import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'aphrodite/no-important';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Widget } from 'Common';
import { data } from './constants';

import * as styles from './style';

export const Analytics = memo(() => {
  const { t } = useTranslation(['analytics']);

  const visitsItems = useMemo(
    () =>
      data.visits.items.map(({ value, label }) => (
        <div className={css(styles.regular.additionalItem)} key={label}>
          <span className={css(styles.regular.additionalText)}>{value}</span>
          <span className={css(styles.regular.additionalDescription)}>{label}</span>
        </div>
      )),
    []
  );

  return (
    <div className={css(styles.regular.root)}>
      <h3 className={css(styles.regular.title)}>{t('title')}</h3>
      <div className={css(styles.regular.container)}>
        <div className={css(styles.regular.left)}>
          <div className={css(styles.regular.widgetsGridTop)}>
            <Widget title={t('visits')}>
              <div className={css(styles.regular.widgetBody)}>
                <div className={css(styles.regular.textInfoMain)}>
                  <span className={css(styles.regular.textInfoTitle)}>{data.visits.total}</span>
                  <ArrowOutwardOutlinedIcon className={css(styles.regular.arrowUp)} />
                </div>
                <div className={css(styles.regular.additionalInfo)}>{visitsItems}</div>
              </div>
            </Widget>
            <Widget title={t('revenue')}>
              <HighchartsReact highcharts={Highcharts} options={data.revenue} />
            </Widget>
            <Widget title={t('performance')}>
              {/*<HighchartsReact highcharts={Highcharts} options={options} />*/}
            </Widget>
            <Widget title={t('overview')}></Widget>
          </div>
        </div>
      </div>
    </div>
  );
});

Analytics.displayName = 'Analytics';
