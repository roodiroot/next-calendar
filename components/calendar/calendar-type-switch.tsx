"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ChevronsUpDown } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const tables = [
  {
    tab: "/calendar/month",
    label: "Month",
  },
  {
    tab: "/calendar/week",
    label: "Week",
  },
];
const CalendarTypeSwitch = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {tables.find((table: any) => table.tab === pathname)?.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <div className="overflow-hidden p-1 text-gray-950 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 dark:text-gray-50 dark:[&_[cmdk-group-heading]]:text-gray-400">
          {tables.map((i: any) => (
            <div
              key={i.tab}
              onClick={() => {
                setOpen(false);
                router.push(i.tab);
              }}
              className={cn(
                "hover:bg-gray-50 cursor-pointer relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-gray-100 aria-selected:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-gray-800 dark:aria-selected:text-gray-50",
                pathname === i.tab && "bg-gray-50"
              )}
            >
              {i.label}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CalendarTypeSwitch;
