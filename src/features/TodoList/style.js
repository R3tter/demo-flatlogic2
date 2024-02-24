import { StyleSheet } from 'aphrodite/no-important';

export const regular = StyleSheet.create({
  root: {
    display: 'block',
    paddingBottom: '30px'
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
    backgroundColor: 'blue'
  },
  subTitle: { color: 'grey' },
  listItem: { display: 'flex', padding: '10px 0' },
  listItemType: { display: 'flex', color: 'grey', fontSize: '12px' },
  listItemName: { display: 'flex' },
  listItemTime: { display: 'flex', color: 'grey', fontSize: '12px' },
  checkboxWrapper: { display: 'flex', alignItems: 'center' },
  seeAll: { display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'blue', cursor: 'pointer' }
});
