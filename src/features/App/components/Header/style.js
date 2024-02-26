import { StyleSheet } from 'aphrodite/no-important';
import { colors, widgetShadow } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minWidth: '100%',
    height: '60px',
    padding: '0 30px',
    background: colors.white,
    boxShadow: widgetShadow
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px'
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  icon: {
    width: '22px',
    height: '22px',
    fill: colors.black.light,
    cursor: 'pointer'
  }
});
