import { css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import * as styles from './style';
import { useState } from 'react';
import { Checkbox } from 'FormComponents';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const TodoList = ({ data }) => {
  const [list, setList] = useState(data);
  const listLength = list.length;
  const completedListLength = list.filter(({ completed }) => completed).length;

  return (
    <div className={css(styles.regular.root)}>
      <div className={css(styles.regular.title)}>
        <div className={css(styles.regular.titleRow)}>
          <span className={css(styles.regular.titleName)}>Today's Tasks</span>
          <div className={css(styles.regular.titleCounter)}>{listLength}</div>
        </div>
        <span className={css(styles.regular.subTitle)}>
          {completedListLength} of {listLength} completed
        </span>
      </div>
      <div>
        {list.map(({ id, completed, type, name, time }) => (
          <div className={css(styles.regular.listItem)} key={id}>
            <div className={css(styles.regular.checkboxWrapper)}>
              <Checkbox
                onChange={() => {
                  setList(list.map(item => (id === item.id ? { ...item, completed: !completed } : item)));
                }}
                value={completed}
              />
            </div>
            <div className={css(styles.todoItem(completed)._)}>
              <div className={css(styles.regular.listItemType)}>{type}</div>
              <div className={css(styles.regular.listItemName)}>{name}</div>
              <div className={css(styles.regular.listItemTime)}>{time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={css(styles.regular.seeAll)}>
        See All <ArrowDownwardIcon fontSize="14px" />
      </div>
    </div>
  );
};

TodoList.propTypes = {
  data: PropTypes.array
};
