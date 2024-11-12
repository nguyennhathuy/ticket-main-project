export type PassengerType = 
  | ''
  | 'Trẻ sơ sinh'
  | 'Trẻ em'
  | 'Người lớn'
  | 'Người cao tuổi'
  | 'Người khuyết tật';

export interface Passenger {
  nationality: string;
  idNumber: string;
  fullName: string;
  birthPlace: string;
  birthDate: string;
  phone: string;
  email: string;
  specialNeeds: boolean;
  passengerType: PassengerType;
  seatNumber?: string;
  returnSeatNumber?: string;
}

export interface TripInfo {
  shipCode: string;
  departure: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  returnShipCode?: string;
  returnDate?: string;
  returnTime?: string;
}

export type SeatStatus = 'available' | 'occupied' | 'selected' | 'disabled';

export interface Seat {
  id: string;
  number: string;
  status: SeatStatus;
  type: 'regular' | 'vip';
  passenger?: number;
}

export const TICKET_PRICES = {
  'Trẻ sơ sinh': 0,
  'Trẻ em': 120000,
  'Người lớn': 200000,
  'Người cao tuổi': 150000,
  'Người khuyết tật': 160000,
} as const;