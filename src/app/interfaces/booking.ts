export interface Booking {
  name: string;
  address?: string;
  email: string;
  phone: string;
  start: Date;
  end: Date;
  guestInRoom?: number;
  roomType: string;
  wifi: string;
  readonly totalCost: number;
  requirements: string;
}

export interface InputObj {
  id: number;
  label: string;
  value: number;
}