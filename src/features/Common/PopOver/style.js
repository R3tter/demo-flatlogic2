import { StyleSheet } from 'aphrodite/no-important';
import { colors, widgetShadow } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    position: 'relative'
  },
  content: {
    position: 'absolute',
    top: '40px',
    right: '50%',
    border: '1px solid rgba(0,0,0,.15)',
    background: colors.white,
    boxShadow: '0 .5rem 1rem rgba(0,0,0,.175)'
  }
});
