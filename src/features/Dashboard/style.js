import { StyleSheet } from 'aphrodite/no-important';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'calc(100% - 80px)',
    overflow: 'auto',
    padding: '40px'
  }
});
