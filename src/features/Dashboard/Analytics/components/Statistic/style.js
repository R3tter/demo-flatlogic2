import { StyleSheet } from 'aphrodite/no-important';
import { colors, widgetShadow } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '5px',
    background: colors.white,
    boxShadow: widgetShadow
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '15px 20px',
    borderBottom: '1px solid #d6dee5'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    margin: 0,
    fontSize: '20px',
    color: colors.black.dark
  },
  total: {
    fontSize: '20px',
    color: colors.black.dark,
    fontWeight: '600'
  },
  additional: {
    display: 'flex'
  },
  additionalItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '12px',
    width: '100%',
    padding: '10px 20px',
    ':first-child': {
      borderRight: '1px solid #d6dee5'
    }
  },
  additionalValue: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    gap: '15px',
    fontSize: '14px',
    color: colors.black.dark
  },
  additionalLabel: {
    fontSize: '12px',
    color: colors.black.light
  },
  positive: {
    width: '24px',
    height: '24px',
    fill: colors.green
  },
  negative: {
    width: '24px',
    height: '24px',
    fill: colors.orange,
    transform: 'rotate(-90deg)'
  }
});

export const circle = color =>
  StyleSheet.create({
    _: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: color
    }
  });
