import { StyleSheet } from 'aphrodite/no-important';
import { colors } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    position: 'relative',
    width: '100%',
    height: '3px',
    borderRadius: '3px'
  },
  backdrop: {
    width: '100%',
    height: '100%',
    background: colors.gray,
    borderRadius: '3px'
  }
});

export const progress = (width, color) =>
  StyleSheet.create({
    _: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: `${width}%`,
      height: '100%',
      background: color
    }
  });
