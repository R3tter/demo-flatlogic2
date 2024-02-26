import { StyleSheet } from 'aphrodite/no-important';
import { colors } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    width: '100%'
  },
  title: {
    fontSize: '35px',
    fontWeight: '400',
    color: colors.black.dark
  },
  container: {
    display: 'flex',
    gap: '40px',
    width: '100%',
    [`@media (max-width: 1940px)`]: {
      flexDirection: 'column'
    }
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    width: 'calc(100% - 360px)',
    [`@media (max-width: 1940px)`]: {
      width: '100%'
    }
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    width: '300px',
    minWidth: '300px',
    [`@media (max-width: 1940px)`]: {
      flexDirection: 'row',
      width: '100%'
    }
  },
  widgetsGridTop: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(260px, 1fr))',
    gap: '40px',
    [`@media (max-width: 1340px)`]: {
      gridTemplateColumns: 'repeat(2, minmax(260px, 1fr))'
    },
    [`@media (max-width: 1140px)`]: {
      gridTemplateColumns: 'repeat(1, minmax(260px, 1fr))'
    }
  },
  widgetBody: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '16px'
  },
  textInfoMain: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  textInfoTitle: {
    fontSize: '30px',
    fontWeight: '400',
    color: colors.black.dark
  },
  additionalInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  additionalItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px'
  },
  additionalText: {
    fontSize: '14px',
    fontWeight: '400',
    color: colors.black.dark
  },
  additionalDescription: {
    fontSize: '12px',
    fontWeight: '400',
    color: colors.black.light
  },
  arrowUp: {
    width: '24px',
    height: '24px',
    color: colors.green
  },
  performanceLegend: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    width: '100%'
  },
  performanceLegendText: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '12px',
    color: colors.black.light
  },
  preformanceItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  grayLabel: {
    fontSize: '12px',
    color: colors.black.light,
    minWidth: 'max-content'
  },
  serverItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  serverContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  statistics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(260px, 1fr))',
    gap: '40px',
    [`@media (max-width: 1140px)`]: {
      gridTemplateColumns: 'repeat(1, minmax(260px, 1fr))'
    }
  }
});

export const circle = color =>
  StyleSheet.create({
    _: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: color
    }
  });
