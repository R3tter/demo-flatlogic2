import { StyleSheet } from 'aphrodite/no-important';
import { colors } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  circle: {
    display: 'flex',
    width: '36px',
    height: '36px',
    alignItems: 'center',
    justifyContent: 'center',
    background: colors.blue.light,
    borderRadius: '50%'
  },
  userImage: {
    width: '16px',
    height: '16px',
    fill: colors.white
  },
  name: {
    fontSize: '16px',
    color: colors.black.light
  },
  notificationCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '24px',
    height: '24px',
    color: colors.white,
    background: colors.blue.light,
    borderRadius: '50%'
  }
});
