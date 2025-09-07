'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiUsers, FiMap, FiLogOut, FiCheckSquare } from 'react-icons/fi';
import { DashboardIcon } from './icons';
import Link from 'next/link';

const menuItems = [
  { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { name: 'Users', icon: <FiUsers />, path: '/users' },
  { name: 'Venues', icon: <FiMap />, path: '/venues' },
  { name: 'Check Ins', icon: <FiCheckSquare />, path: '/checkins' },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`h-screen bg-white shadow-md flex flex-col transition-all duration-300 ${
        expanded ? 'w-64' : 'w-17'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-4 ">
        <span className="text-xl font-bold">N</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-2">
        {menuItems.map(item => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 p-2 rounded-md font-bold ${!expanded &&
                'justify-center'} ${
                isActive
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {expanded && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 flex items-center gap-2">
        <FiLogOut className="text-xl" />
        {expanded && <span>Logout</span>}
      </div>
    </div>
  );
}
