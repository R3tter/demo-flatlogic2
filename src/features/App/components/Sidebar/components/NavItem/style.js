import { StyleSheet } from 'aphrodite/no-important';
import { colors, transition } from 'constants/styles';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 10px',
    width: '100%',
    background: colors.blue.dark,
    ':hover': {
      background: colors.blue.darkHover
    }
  },
  mainContainer: {
    display: 'flex',
    minHeight: '56px',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition
  },
  mainLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px'
  },
  mainTitle: {
    position: 'relative',
    color: colors.white,
    fontSize: '14px'
  },
  subTitle: {
    position: 'absolute',
    top: '-10px',
    right: '-50px',
    fontSize: '12px'
  },
  childContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '14px'
  },
  subItem: {
    width: '100%',
    padding: '10px 25px'
  },
  subLink: {
    fontSize: '12px',
    color: colors.white,
    textDecoration: 'none'
  },
  subLinkActive: {
    fontWeight: 'bold'
  }
});

export const imageContainer = selected =>
  StyleSheet.create({
    _: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      background: selected ? colors.white : 'transparent'
    }
  });

export const expandIcon = expanded =>
  StyleSheet.create({
    _: {
      width: '15px',
      height: '15px',
      fill: colors.gray,
      transform: `rotate(${expanded ? '0deg' : '90deg'})`
    }
  });

export const icon = isSelected =>
  StyleSheet.create({
    _: {
      width: '18px',
      height: '18px',
      fill: isSelected ? colors.blue.dark : colors.black.light
    }
  });
