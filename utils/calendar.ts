import { Task } from '@/components/calendar'
import dayjs from 'dayjs'

type TasksForDate = {
    Call: Task[];
    Meet: Task[];
    Brief: Task[];
  };

export const generateDate = (month = dayjs().month(), year = dayjs().year(), tasks: Task[]) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month")
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month")

    const arrayOfDate = []

    //create prefix date
    for(let i = 0; i < firstDateOfMonth.day(); i++){
        arrayOfDate.push({
            currentMonth: false,
            date: firstDateOfMonth.date(i)
        })
    }

    //generate current date
    for(let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++){

        const currentDate = firstDateOfMonth.date(i);
        const formattedDate = currentDate.format('YYYY-MM-DD');



        // Initialize task categories
        const tasksForDate: TasksForDate = {
            Call: [],
            Meet: [],
            Brief: []
        };

        // Filter and categorize tasks for the current date
        tasks.forEach(task => {
            if (dayjs(task.date).format('YYYY-MM-DD') === formattedDate) {
                if (task.type in tasksForDate) {
                    tasksForDate[task.type as keyof TasksForDate].push(task);
                  }
            }
        });

        arrayOfDate.push({
            currentMonth: true,
            date: firstDateOfMonth.date(i),
            today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString(),
            tasks: tasksForDate
        })
    }

    //generate suffix date
    const remaining = 42 - arrayOfDate.length
    for(let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++){
        arrayOfDate.push({
            currentMonth: false,
            date: firstDateOfMonth.date(i)
        })
    }
    return arrayOfDate
}

export const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];


//   tasks.map(i => {
//     console.log(dayjs(new Date(i.date)))
// })