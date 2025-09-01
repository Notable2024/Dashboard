import { UserIcon } from './icons';

export default function StatsCard({ title, value, change }) {
  return (
    <div className="flex items-center bg-white rounded-xl shadow p-4">
      <div className="text-2xl mr-4"><UserIcon /></div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
        {change && (
          <p className={`text-sm ${change > 0 ? "text-green-500" : "text-red-500"}`}>
            {change > 0 ? `↑ ${change}%` : `↓ ${Math.abs(change)}%`} this month
          </p>
        )}
      </div>
    </div>
  );
}
