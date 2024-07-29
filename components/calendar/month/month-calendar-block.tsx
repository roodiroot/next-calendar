"use client";

import dayjs from "dayjs";
import { useState } from "react";

import MonthCalendar from "@/components/calendar/month/month-calendar";
import MonthHeaderCalendar from "@/components/calendar/month/month-header-calendar";

export type Task = {
  id: string;
  createdAt: string;
  type: "Call" | "Meet" | "Brief";
  comment: string;
  date: string;
  responsible: string | null;
  finished: boolean;
  dealId: string;
};

interface CalendarProps {
  tasks: Task[];
}

const MonthCalendarBlock: React.FC<CalendarProps> = ({ tasks }) => {
  const currenntDate = dayjs();
  const [today, setToday] = useState(currenntDate);

  return (
    <>
      <MonthHeaderCalendar
        today={today}
        setToday={setToday}
        currenntDate={currenntDate}
      />
      <MonthCalendar tasks={tasks} today={today} />
    </>
  );
};

export default MonthCalendarBlock;
