import React from 'react';
import { formatCurrency } from '../utils';

interface PassengerTrip {
  id: number;
  fullName: string;
  idNumber: string;
  ship: string;
  date: string;
  time: string;
  price: number;
}

interface TripSummaryProps {
  passengers: PassengerTrip[];
}

export function TripSummary({ passengers }: TripSummaryProps) {
  const total = passengers.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Hành trình</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STT
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên hành khách
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CCCD/Hộ chiếu
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tàu
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ngày
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giờ khởi hành
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giá (VND)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {passengers.map((passenger, index) => (
              <tr key={passenger.id}>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {passenger.fullName}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {passenger.idNumber}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {passenger.ship}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {passenger.date}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {passenger.time}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatCurrency(passenger.price)}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td colSpan={6} className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Tổng cộng
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium text-blue-600">
                {formatCurrency(total)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}