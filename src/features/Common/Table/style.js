import { StyleSheet } from 'aphrodite/no-important';
import { colors } from 'constants/styles';

export const tableRoot = styles =>
  StyleSheet.create({
    _: {
      width: '100%',
      background: colors.white,
      fontSize: '14px',
      ...styles
    }
  });

const getTemplate = columns => columns.reduce((total, column) => `${total} ${column.style?.grid ?? 'auto'}`, '');

export const tableHeading = columns =>
  StyleSheet.create({
    _: {
      minHeight: '50px',
      display: 'grid',
      gridTemplateColumns: getTemplate(columns),
      gap: '25px',
      alignItems: 'center',
      background: colors.white,
      borderBottom: `1px solid ${colors.gray}`
    }
  });

export const tableRow = (columns, withHover) =>
  StyleSheet.create({
    _: {
      display: 'grid',
      gridTemplateColumns: getTemplate(columns),
      alignItems: 'center',
      width: '100%',
      padding: '10px 0',
      gap: '25px',
      borderBottom: `1px solid ${colors.gray}`,
      ':nth-child(odd)': {
        background: '#f8f9fa'
      },
      ...(withHover && {
        ':hover': {
          background: colors.gray,
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer'
        }
      })
    }
  });

export const tableCell = style =>
  StyleSheet.create({
    _: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
      maxHeight: '100%',
      fontSize: '14px',
      color: colors.black.light,
      overflow: 'hidden',
      ...style
    }
  });

export const label = sortId =>
  StyleSheet.create({
    _: {
      display: 'flex',
      cursor: sortId ? 'pointer' : 'default'
    }
  });

export const regular = StyleSheet.create({
  cellText: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
});
