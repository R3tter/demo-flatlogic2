import { StyleSheet } from 'aphrodite/no-important';

import { supportStatuses } from 'constants/index';
import { colors } from 'constants/styles';

const getColorByStatus = status => {
  switch (status) {
    case supportStatuses.sent:
      return colors.blue.light;
    case supportStatuses.pending:
      return colors.green;
    case supportStatuses.declined:
      return colors.orange;
  }
};

export const root = status =>
  StyleSheet.create({
    _: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
      background: getColorByStatus(status),
      padding: '6px',
      color: colors.white,
      cursor: 'pointer',
      ':hover': {
        filter: 'brightness(90%)'
      }
    }
  });
