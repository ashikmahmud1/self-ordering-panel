export interface Menu {
  id?: string;
  name?: string;
  desc?: string;
  category?: Array<string>;
  opHrs?: Array<OpHr>;
}

interface OpHr {
  fromTime: string;
  toTime: string;
  day: string;
}
export interface SelectFormVal {
  [index: number]: {
    label: string;
    value: string;
  };
}
export const dayList: SelectFormVal = [
  { label: 'Everyday', value: 'Everyday' },
  { label: 'Weekday', value: 'Weekday' },
  { label: 'Sunday', value: 'Sunday' },
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
];
