export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-50 lg:h-0 lg:min-h-[700px] p-4">
      <div className="lg:flex lg:h-full lg:flex-col">{children}</div>
    </div>
  );
}
