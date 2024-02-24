import { css } from 'aphrodite/no-important';
import * as styles from './style';
import { useState } from 'react';
import { Checkbox } from 'FormComponents';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const type = { call: 'Call', meeting: 'Meeting', interview: 'Interview' };

export const TodoList = () => {
  const [list, setList] = useState([
    { id: 0, completed: false, type: type.call, name: 'Call with HT Company', time: '9:00' },
    {
      id: 1,
      completed: true,
      type: type.meeting,
      name: 'Meeting with Andrew',
      time: '11:00'
    },
    { id: 2, completed: false, type: type.interview, name: 'Interview with HR', time: '14:00' }
  ]);
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
            <div>
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
