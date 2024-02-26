import { StyleSheet } from 'aphrodite/no-important';
import { colors, widgetShadow } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    display: 'block',
    paddingBottom: '30px',
    width: '100%',
    maxWidth: '300px',
    background: colors.white,
    boxShadow: widgetShadow,
    padding: '15px 20px',
    borderRadius: '5px'
  },
  title: {
    paddingBottom: '30px'
  },
  titleRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  titleName: {
    display: 'flex',
    fontSize: '18px'
  },
  titleCounter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25px',
    height: '25px',
    boxSizing: 'border-box',
    borderRadius: '50%',
    color: 'white',
    backgroundColor: colors.blue.light
  },
  subTitle: {
    color: colors.black.light
  },
  listItem: {
    display: 'flex',
    gap: '10px',
    padding: '10px 0'
  },
  listItemType: {
    display: 'flex',
    color: colors.black.light,
    fontSize: '12px'
  },
  listItemName: {
    display: 'flex',
    fontSize: '14px',
    color: colors.black.dark
  },
  listItemTime: {
    display: 'flex',
    color: colors.black.light,
    fontSize: '12px'
  },
  checkboxWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  seeAll: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.blue.light,
    cursor: 'pointer'
  }
});

export const todoItem = completed =>
  StyleSheet.create({
    _: {
      textDecoration: completed ? 'line-through' : 'none'
    }
  });
