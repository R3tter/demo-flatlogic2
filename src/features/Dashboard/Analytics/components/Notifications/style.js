import { StyleSheet } from 'aphrodite/no-important';
import { colors, widgetShadow } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    padding: '15px 20px',
    background: colors.white,
    borderRadius: '5px',
    boxShadow: widgetShadow
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '20px',
    color: colors.black.dark
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: colors.blue.light,
    color: colors.white
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    width: '100%'
  },
  notification: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    width: '100%'
  },
  notificationText: {
    fontSize: '14px',
    color: colors.black.light
  }
});

export const icon = color =>
  StyleSheet.create({
    _: {
      width: '18px',
      height: '18px',
      fill: color
    }
  });
