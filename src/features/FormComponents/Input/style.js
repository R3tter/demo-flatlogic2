import { StyleSheet } from 'aphrodite/no-important';
import { colors } from 'constants/styles';

export const regular = StyleSheet.create({
  input: {
    appearance: 'none',
    border: 'none',
    boxShadow: 'none',
    outline: 'none',
    fontSize: '14px',
    color: colors.black.light,
    background: 'transparent'
  },
  icon: {
    width: '16px',
    height: '16px',
    fill: colors.black.light,
    color: colors.black.light
  }
});

export const root = focused =>
  StyleSheet.create({
    _: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      width: '100%',
      maxWidth: '245px',
      padding: '10px',
      background: focused ? colors.gray : colors.white,
      borderRadius: '6px'
    }
  });
