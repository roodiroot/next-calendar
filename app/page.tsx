import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-10 bg-gray-50">
      <Link href="/calendar/month">Calendar</Link>
    </div>
  );
}
