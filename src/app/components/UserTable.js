'use client';
import { useState } from 'react';
import { FiFilter, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import StatsCard from '@/app/components/StatsCard';
const users = [
  { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
  { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
  { name: 'Ronald Richards', company: 'Adobe', phone: '(202) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
  { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
  { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
  { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
  { name: 'Ronald Richards', company: 'Adobe', phone: '(202) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
  { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
  { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
  { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
  { name: 'Ronald Richards', company: 'Adobe', phone: '(202) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
  { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
  { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
  
];

export default function UserTable() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <StatsCard title="Total Customers" value="5,423" change={20} />
          <StatsCard title="Members" value="1,893" change={-5} />
          <StatsCard title="Active Now" value="189" />
        </div>
      </div>
      <div className="bg-white shadow rounded-xl p-4 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Notable Members</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FiSearch className="text-gray-400" />
              </span>
              <input
                type="search"
                placeholder="Search..."
                className="bg-gray-50 border border-gray-200 rounded-md p-1 pl-8"
              />
            </div>
            <FiFilter className="text-xl" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-2">Customer Name</th>
                <th className="p-2">Company</th>
                <th className="p-2">Phone Number</th>
                <th className="p-2">Email</th>
                <th className="p-2">Country</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
               {users.map((u, idx) => (
                <tr key={idx} className="border-b border-gray-200">
                  <td className="p-2">{u.name}</td>
                  <td className="p-2">{u.company}</td>
                  <td className="p-2">{u.phone}</td>
                  <td className="p-2">{u.email}</td>
                  <td className="p-2">{u.country}</td>
                  <td className="p-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        u.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-center mt-6">
          <button className="p-2">
            <FiChevronLeft />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: 9 }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-md ${
                  currentPage === page ? 'bg-black text-white' : 'bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="p-2">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
