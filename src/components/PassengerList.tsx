import React from 'react';
import { Passenger, TripInfo } from '../types';
import { formatDate } from '../utils';

interface PassengerListProps {
  passengers: Passenger[];
  tripInfo: TripInfo;
  selectedPassengerIndex: number;
  onPassengerSelect: (index: number) => void;
  isReturn?: boolean;
}

export function PassengerList({
  passengers,
  tripInfo,
  selectedPassengerIndex,
  onPassengerSelect,
  isReturn = false,
}: PassengerListProps) {
  const needsSeat = (passenger: Passenger) => {
    return passenger.passengerType !== 'Trẻ sơ sinh';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          {isReturn ? 'Lượt về' : 'Lượt đi'}
        </h3>
        <div className="mt-2 space-y-1">
          <p>Mã tàu: {isReturn ? tripInfo.returnShipCode : tripInfo.shipCode}</p>
          <p>
            Khởi hành: {formatDate(isReturn ? tripInfo.returnDate : tripInfo.departureDate)} - {' '}
            {isReturn ? tripInfo.returnTime : tripInfo.departureTime}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {passengers.map((passenger, index) => (
          <div
            key={index}
            className={`
              p-4 rounded-lg border-2 cursor-pointer transition-colors
              ${selectedPassengerIndex === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
              ${needsSeat(passenger) ? 'hover:bg-gray-50' : 'opacity-70 cursor-not-allowed'}
            `}
            onClick={() => needsSeat(passenger) && onPassengerSelect(index)}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{passenger.fullName}</p>
                <p className="text-sm text-gray-600">{passenger.passengerType}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Ghế</p>
                <p className="font-medium">
                  {isReturn ? passenger.returnSeatNumber || '---' : passenger.seatNumber || '---'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}