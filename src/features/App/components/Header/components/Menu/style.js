import { StyleSheet } from 'aphrodite/no-important';
import { colors } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    padding: '10px 0',
    minWidth: '150px'
  },
  item: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '5px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    ':hover': {
      background: colors.gray
    }
  },
  divider: {
    width: '100%',
    height: '1px',
    background: colors.border
  },
  itemIcon: {
    width: '16px',
    height: '16px',
    fill: colors.black.light
  },
  icon: {
    width: '22px',
    height: '22px',
    fill: colors.black.light,
    cursor: 'pointer'
  }
});
