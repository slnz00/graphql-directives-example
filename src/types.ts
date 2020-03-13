export enum Feature {
  REPORTS = 'REPORTS',
  SHIFTS = 'SHIFTS',
}

export interface User {
  id: string
  name: string
}

export interface Report {
  id: string
  description: string
}

export interface Shift {
  id: string
  startDate: string
  endDate: string
}