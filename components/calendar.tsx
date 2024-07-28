'use client';

import dayjs from 'dayjs';
import { useState } from 'react';

import HeaderCalendar from '@/components/header-calendar';
import MonthCalendar from '@/components/month-calendar';
import WeekCalendar from './week-calendar';

export type Task = {
  id: string;
  createdAt: string;
  type: 'Call' | 'Meet' | 'Brief';
  comment: string;
  date: string;
  responsible: string | null;
  finished: boolean;
  dealId: string;
};

interface CalendarProps {
  tasks: Task[];
}

const tables = [
  {
    tab: 'month',
    label: 'Month',
  },
  {
    tab: 'week',
    label: 'Week',
  },
];

const Calendar: React.FC<CalendarProps> = ({ tasks }) => {
  const [tab, setTab] = useState('month');
  const currenntDate = dayjs();
  const [today, setToday] = useState(currenntDate);

  return (
    <>
      <HeaderCalendar
        today={today}
        setToday={setToday}
        currenntDate={currenntDate}
        tables={tables}
        tab={tab}
        setTab={setTab}
      />
      {tab === 'month' && <MonthCalendar tasks={tasks} today={today} />}
      {tab === 'week' && <WeekCalendar />}
    </>
  );
};

export default Calendar;
