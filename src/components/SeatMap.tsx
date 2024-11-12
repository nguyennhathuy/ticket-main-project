import React from 'react';
import { Seat } from '../types';
import { Armchair } from 'lucide-react';

interface SeatMapProps {
  seats: Seat[];
  onSeatSelect: (seatId: string) => void;
  selectedPassengerIndex?: number;
}

export function SeatMap({ seats, onSeatSelect, selectedPassengerIndex }: SeatMapProps) {
  const getStatusColor = (status: Seat['status'], type: Seat['type']) => {
    switch (status) {
      case 'available':
        return type === 'vip' ? 'text-emerald-500' : 'text-blue-500';
      case 'occupied':
        return 'text-gray-400';
      case 'selected':
        return 'text-amber-500';
      case 'disabled':
        return 'text-red-500';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Sơ đồ ghế ngồi</h3>
        <div className="grid grid-cols-6 gap-2">
          {seats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => seat.status === 'available' && onSeatSelect(seat.id)}
              disabled={seat.status === 'occupied' || seat.status === 'disabled'}
              className={`
                relative p-2 rounded-lg border-2 transition-colors
                ${seat.status === 'available' ? 'hover:bg-gray-50 cursor-pointer' : ''}
                ${seat.status === 'selected' ? 'border-amber-500' : 'border-transparent'}
              `}
            >
              <Armchair 
                className={`w-8 h-8 ${getStatusColor(seat.status, seat.type)}`}
              />
              <span className="absolute -top-1 -right-1 text-xs font-medium bg-gray-100 rounded-full px-1">
                {seat.number}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Armchair className="w-5 h-5 text-blue-500" />
          <span className="text-sm">Ghế thường trống</span>
        </div>
        <div className="flex items-center space-x-2">
          <Armchair className="w-5 h-5 text-emerald-500" />
          <span className="text-sm">Ghế VIP trống</span>
        </div>
        <div className="flex items-center space-x-2">
          <Armchair className="w-5 h-5 text-gray-400" />
          <span className="text-sm">Ghế đã đặt</span>
        </div>
        <div className="flex items-center space-x-2">
          <Armchair className="w-5 h-5 text-amber-500" />
          <span className="text-sm">Ghế đang chọn</span>
        </div>
        <div className="flex items-center space-x-2">
          <Armchair className="w-5 h-5 text-red-500" />
          <span className="text-sm">Ghế không khả dụng</span>
        </div>
      </div>
    </div>
  );
}