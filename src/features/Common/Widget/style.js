import { StyleSheet } from 'aphrodite/no-important';
import { mainPadding, widgetShadow, colors, transition } from 'constants/styles';

const baseIcon = {
  fill: colors.black.light,
  cursor: 'pointer',
  ':hover': {
    opacity: '0.4'
  }
};

export const regular = StyleSheet.create({
  head: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '18px',
    color: colors.black.dark
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  icon: {
    width: '8px',
    height: '8px',
    ...baseIcon
  }
});

export const root = (closed, customStyles = {}) =>
  StyleSheet.create({
    _: {
      display: closed ? 'none' : 'flex',
      flexDirection: 'column',
      gap: '28px',
      padding: mainPadding,
      minWidth: '260px',
      width: '100%',
      boxShadow: widgetShadow,
      borderRadius: '5px',
      background: colors.white,
      ...customStyles
    }
  });

export const container = (collapsed, height) =>
  StyleSheet.create({
    _: {
      display: 'flex',
      width: '100%',
      height: collapsed ? '0px' : height,
      overflow: 'hidden',
      transition
    }
  });

export const collapseIcon = collapsed =>
  StyleSheet.create({
    _: {
      width: '15px',
      height: '15px',
      transform: `rotate(${collapsed ? '180deg' : '0'})`,
      ...baseIcon
    }
  });
