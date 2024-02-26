import { StyleSheet } from 'aphrodite/no-important';
import { colors } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '16px',
    color: colors.black.light
  }
});

export const item = isLast =>
  StyleSheet.create({
    _: {
      fontSize: '16px',
      color: colors.black[isLast ? 'dark' : 'light'],
      textTransform: 'capitalize',
      fontWeight: isLast ? '500' : '300',
      textDecoration: 'none'
    }
  });
