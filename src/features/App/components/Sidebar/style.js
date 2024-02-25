import { StyleSheet } from 'aphrodite/no-important';
import { colors, transition } from 'constants/styles';

export const root = expanded =>
  StyleSheet.create({
    _: {
      width: expanded ? '230px' : '50px',
      minWidth: expanded ? '230px' : '50px',
      height: '100%',
      minHeight: '100%',
      overflow: 'hidden',
      transition
    }
  });

export const title = expanded =>
  StyleSheet.create({
    _: {
      width: '100%',
      fontSize: '24px',
      textAlign: expanded ? 'center' : 'left',
      transition
    }
  });

export const regular = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    alignItems: 'center',
    width: '230px',
    minWidth: '230px',
    minHeight: '100%',
    height: '100%',
    overflow: 'auto',
    padding: '20px 0',
    background: colors.blue.dark,
    color: colors.white,
    '::-webkit-scrollbar': {
      background: 'red'
    }
  },
  navigationList: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
});
