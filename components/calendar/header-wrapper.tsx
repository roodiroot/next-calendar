import CalendarTypeSwitch from "@/components/calendar/calendar-type-switch";

interface HeaderWrapperCalendarProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
}
const HeaderWrapperCalendar: React.FC<HeaderWrapperCalendarProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
      <h1 className="font-bold text-gray-900 leading-6">{title}</h1>
      <div className="flex">
        {children}
        <div className="ml-4">
          <CalendarTypeSwitch />
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapperCalendar;
