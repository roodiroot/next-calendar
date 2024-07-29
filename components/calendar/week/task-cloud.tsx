import { cn } from "@/lib/utils";
import { timeToNumber, typeToNumber } from "@/utils/calendar";
import dayjs from "dayjs";
import { Task } from "./week-calendar-block";

const TaskCloud = ({ task }: { task: Task }) => {
  return (
    <li
      className="relative flex mt-[1px]"
      style={{
        gridColumnStart: `${dayjs(task.date).day() + 1}`,
        gridRow: `${timeToNumber(task.date)} / span ${typeToNumber(task.type)}`,
      }}
    >
      <div
        className={cn(
          "absolute inset-1 flex gap-2 items-start shadow-sm overflow-y-auto rounded-md p-2 text-xs leading-5 hover:z-30 hover:outline hover:outline-1 transition-all",
          task.type === "Call" && "bg-blue-50 text-blue-700",
          task.type === "Meet" && "bg-pink-50 text-pink-700",
          task.type === "Brief" && "bg-emerald-50 text-emerald-700"
        )}
      >
        <div className="flex gap-2 items-baseline">
          {task.type}{" "}
          <span className=" opacity-60 text-xs">
            (
            {new Date(task.date).toLocaleString("en-En", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            )
          </span>
        </div>
      </div>
    </li>
  );
};

export default TaskCloud;
