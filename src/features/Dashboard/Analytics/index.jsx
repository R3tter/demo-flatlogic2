import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'aphrodite/no-important';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { colors } from 'constants/styles';
import { Widget } from 'Common';

import { data } from './constants';
import { Progress, Statistic } from './components';

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

  const appPerformanceJSX = useMemo(
    () =>
      data.performance.map(({ label, current, last }) => (
        <div className={css(styles.regular.preformanceItem)} key={label}>
          <span className={css(styles.regular.grayLabel)}>{label}</span>
          <Progress progress={last} />
          <Progress progress={current} color={colors.orange} />
        </div>
      )),
    []
  );

  const statisticsJSX = useMemo(
    () =>
      data.statistics.map(({ title, color, data }, i) => <Statistic title={title} color={color} data={data} key={i} />),
    []
  );

  const serverJSX = useMemo(
    () =>
      data.server.map(({ data, options }, i) => (
        <div className={css(styles.regular.serverItem)} key={i}>
          <div className={css(styles.regular.grayLabel)}>
            {data.percentage} / {data.temp} / {data.gh}
          </div>
          <HighchartsReact highcharts={Highcharts} options={options} />
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
            <Widget title={t('performance')} customStyles={{ gap: '16px' }}>
              <div className={css(styles.regular.widgetBody)}>
                <div className={css(styles.regular.performanceLegend)}>
                  <p className={css(styles.regular.performanceLegendText)}>
                    <span className={css(styles.circle(colors.orange)._)} />
                    {t('performanceWidget.current')}
                  </p>
                  <p className={css(styles.regular.performanceLegendText)}>
                    <span className={css(styles.circle(colors.blue.dark)._)} />
                    {t('performanceWidget.last')}
                  </p>
                </div>
                {appPerformanceJSX}
              </div>
            </Widget>
            <Widget title={t('overview')}>
              <div className={css(styles.regular.serverContainer)}>{serverJSX}</div>
            </Widget>
          </div>
          <Widget title={t('daily')} collapsible>
            <HighchartsReact
              highcharts={Highcharts}
              options={data.dailyData}
              containerProps={{ style: { width: '100%' } }}
            />
          </Widget>
          <div className={css(styles.regular.statistics)}>{statisticsJSX}</div>
        </div>
      </div>
    </div>
  );
});

Analytics.displayName = 'Analytics';
