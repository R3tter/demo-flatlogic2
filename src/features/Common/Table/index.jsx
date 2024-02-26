import { memo } from 'react';
import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';

import * as styles from './style';

export const Table = memo(({ columns, rows, customStyles }) => (
  <div className={css(styles.tableRoot(customStyles)._)}>
    <div className={css(styles.tableHeading(columns)._)}>
      {columns.map((column, index) => (
        <div
          data-testid="table-header-cell"
          key={index}
          className={css(styles.tableCell(column.style?.cell?.header)._)}
        >
          <span data-testid="column-title" className={css(styles.label(column.sortId)._)}>
            {column.label}
          </span>
        </div>
      ))}
    </div>
    {!!rows.length &&
      rows.map((row, index) => (
        <div key={index} className={css(styles.tableRow(columns, row.callback)._)}>
          {columns.map((column, index) => {
            const content = row[column.id] ?? '-';
            return (
              <div
                key={index}
                className={css(styles.tableCell(column.style?.cell?.row)._)}
                title={typeof content === 'string' ? content : ''}
              >
                {content}
              </div>
            );
          })}
        </div>
      ))}
  </div>
));

Table.displayName = 'Table';

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
      style: PropTypes.shape({
        grid: PropTypes.string,
        cell: PropTypes.shape({
          row: PropTypes.object,
          header: PropTypes.object
        })
      })
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  customStyles: PropTypes.object
};
