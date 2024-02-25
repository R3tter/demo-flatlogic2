import { StyleSheet } from 'aphrodite/no-important';
import { colors } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    width: '100%'
  },
  title: {
    fontSize: '35px',
    fontWeight: '400',
    color: colors.black.dark
  },
  container: {
    display: 'flex',
    gap: '40px',
    width: '100%'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    width: '100%'
  },
  widgetsGridTop: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(260px, 1fr))',
    gap: '40px'
  },
  widgetBody: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '28px'
  },
  textInfoMain: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  textInfoTitle: {
    fontSize: '30px',
    fontWeight: '400',
    color: colors.black.dark
  },
  additionalInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  additionalItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px'
  },
  additionalText: {
    fontSize: '14px',
    fontWeight: '400',
    color: colors.black.dark
  },
  additionalDescription: {
    fontSize: '12px',
    fontWeight: '400',
    color: colors.black.light
  },
  arrowUp: {
    width: '24px',
    height: '24px',
    color: colors.green
  }
});
