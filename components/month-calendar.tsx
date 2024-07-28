import { cn } from '@/lib/utils';
import { generateDate } from '@/utils/calendar';

const MonthCalendar = ({ tasks, today }: any) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div className="shadow-sm ring-0 lg:flex lg:flex-auto lg:flex-col">
      <div className="grid grid-cols-7 gap-[1px] border-b border-gray-300 bg-gray-200 text-center text-sm font-semibold leading-6 text-gray-700 lg:flex-none">
        {days.map((i) => (
          <div key={i} className="bg-white py-2 ">
            {i[0]}
            <span className="sr-only sm:not-sr-only">{i.slice(1)}</span>
          </div>
        ))}
      </div>
      <div className="flex bg-gray-200 text-sm leading-6 text-gray-700 lg:flex-auto">
        <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 gap-[1px] ">
          {generateDate(today.month(), today.year(), tasks).map(
            ({ date, currentMonth, today, tasks }, index) => (
              <div
                key={index}
                className={cn(
                  'relative bg-white flex flex-col justify-end gap-[1px] p-1',
                  !currentMonth && 'bg-gray-50 text-gray-500',
                )}>
                <div className="h-1/2 flex gap-1">
                  {tasks?.Call.length ? (
                    <div className="rounded-md flex-1 bg-blue-50">
                      <div className="w-full h-full flex flex-col text-xs text-white p-1">
                        <div className="text-blue-500">Call</div>
                        <div className="text-base text-end font-semibold text-blue-700">
                          {tasks?.Call.length}
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {tasks?.Meet.length ? (
                    <div className="rounded-md flex-1 bg-pink-50">
                      <div className="w-full h-full flex flex-col text-xs text-white p-1">
                        <div className="text-pink-500">Meet</div>
                        <div className="text-base text-end font-semibold text-pink-700">
                          {tasks?.Meet.length}
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {tasks?.Brief.length ? (
                    <div className="rounded-md flex-1 bg-emerald-50">
                      <div className="w-full h-full flex flex-col text-xs text-white p-1">
                        <div className="text-emerald-500">Brief</div>
                        <div className="text-base text-end font-semibold text-emerald-700">
                          {tasks?.Brief.length}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <time
                  dateTime="2021-12-27"
                  className={cn(
                    'absolute top-2 left-3 flex w-6 h-6 items-center justify-center rounded-full',
                    today && 'bg-indigo-500 text-white font-semibold',
                  )}>
                  {date.date()}
                </time>
              </div>
            ),
          )}
        </div>
        {/* <div className="w-full isolate grid grid-cols-7 grid-rows-6 gap-[1px] lg:hidden">
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today }, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex h-14 flex-col bg-white px-3 py-2',
                      !currentMonth && 'bg-gray-50 text-gray-500',
                    )}>
                    <time
                      dateTime="2021-12-27"
                      className={cn('', today && 'text-indigo-500 font-bold')}>
                      {date.date()}
                    </time>
                  </div>
                ),
              )}
            </div> */}
      </div>
    </div>
  );
};

export default MonthCalendar;
