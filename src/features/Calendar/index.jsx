import 'react-calendar/dist/Calendar.css';
import { Calendar as ReactCalendar } from 'react-calendar';
import { useState } from 'react';
import { format } from 'date-fns';

export const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <ReactCalendar
        formatShortWeekday={(locale, date) => format(date, 'EEEEE')}
        next2Label={null}
        prev2Label={null}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
