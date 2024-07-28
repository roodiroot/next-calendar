import { cn } from '@/lib/utils';
import { generateDate } from '@/utils/calendar';

const WeekCalendar = ({ tasks, today }: any) => {
  return (
    <div className=" isolate flex lex-1 flex-col overflow-auto bg-white ">
      <div
        className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full "
        style={{ width: '165%' }}>
        <div className="sticky top-0 z-30 flex-none bg-white shadow-sm ring-1 sm:pr-8">
          <div className="-mr-[1px] hidden grid-cols-7 border-r text-sm leading-6 text-gray-500 sm:grid">
            <div className="w-14 col-end-1"></div>
            {new Array(7).fill('').map((i, index) => (
              <div key={index} className="flex items-center justify-center py-3 border-x">
                <span>
                  Mon <span className="font-semibold text-gray-900">10</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-auto">
          <div className="sticky left-0 z-10 w-14 flex-none bg-white shadow-sm ring-1"></div>
          <div className="grid flex-auto grid-cols-1 grid-rows-1">
            <div
              className="col-start-1 col-end-2 row-start-1 grid"
              style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}>
              <div className="row-end-1 h-7"></div>
              <div className="border-b">
                <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-500">
                  12AM
                </div>
              </div>
              <div className="border-b"></div>
              <div className="border-b">
                <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-500">
                  12AM
                </div>
              </div>
              <div className="border-b"></div>
              <div className="border-b">
                <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-500">
                  12AM
                </div>
              </div>
              <div className="border-b"></div>
              <div className="border-b">
                <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-500">
                  12AM
                </div>
              </div>
              <div className="border-b"></div>
              <div className="border-b">
                <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-500">
                  12AM
                </div>
              </div>
              <div className="border-b"></div>
              <div className="border-b">
                <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-500">
                  12AM
                </div>
              </div>
              <div className="border-b"></div>
              <div className="border-b">
                <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-500">
                  12AM
                </div>
              </div>
              <div className="border-b"></div>
              <div className="border-b">
                <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-500">
                  12AM
                </div>
              </div>
              <div className="border-b"></div>
            </div>
            <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 sm:grid sm:grid-cols-7">
              <div className="col-start-1 row-span-full"></div>
              <div className="col-start-2 row-span-full border-x"></div>
              <div className="col-start-3 row-span-full border-x"></div>
              <div className="col-start-4 row-span-full border-x"></div>
              <div className="col-start-5 row-span-full border-x"></div>
              <div className="col-start-6 row-span-full border-x"></div>
              <div className="col-start-7 row-span-full border-x"></div>
              <div className="col-start-8 row-span-full w-8"></div>
            </div>
            <ol
              className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8 "
              style={{ gridTemplateRows: '1.75rem repeat(288, minmax(0px, 1fr)) auto' }}>
              <li
                className="col-start-3 relative flex mt-[1px]"
                style={{ gridRow: '74 / span 12' }}>
                <div className="absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-sky-50 p-2 text-xs leading-5"></div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekCalendar;
