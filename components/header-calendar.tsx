'use client';

import { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { months } from '@/utils/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const HeaderCalendar = ({ today, setToday, currenntDate, tables, tab, setTab }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
      <h1 className="font-bold text-gray-900 leading-6">
        {months[today.month()] + ' ' + today.year()}
      </h1>
      <div className="flex">
        <div className="">
          <Button
            onClick={() => setToday(today.month(today.month() - 1))}
            variant="outline"
            className="rounded-r-none border-r-0">
            &lsaquo;
          </Button>
          <Button
            onClick={() => setToday(currenntDate)}
            variant="outline"
            className="rounded-none border-x-0">
            Today
          </Button>
          <Button
            onClick={() => setToday(today.month(today.month() + 1))}
            variant="outline"
            className="rounded-l-none border-l-0">
            &rsaquo;
          </Button>
        </div>
        <div className="ml-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between">
                {tables.find((table: any) => table.tab === tab)?.label}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <div className="overflow-hidden p-1 text-gray-950 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 dark:text-gray-50 dark:[&_[cmdk-group-heading]]:text-gray-400">
                {tables.map((i: any) => (
                  <div
                    key={i.tab}
                    onClick={() => {
                      setTab(i.tab);
                      setOpen(false);
                    }}
                    className={cn(
                      'hover:bg-gray-50 cursor-pointer relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-gray-100 aria-selected:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-gray-800 dark:aria-selected:text-gray-50',
                      tab === i.tab && 'bg-gray-50',
                    )}>
                    {i.label}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default HeaderCalendar;
