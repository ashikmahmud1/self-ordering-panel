export interface Outlet {
  id?: string;
  name?: string;
  website?: string;
  tax?: string;
  ordertype?: {
    forhere?: boolean;
    togo?: boolean;
  };
  omnivore?: string;
  analytics?: string;
  confirmation?: string;
  errmag?: string;
  isDisable?: boolean;
  image?: string;
  currency?: string;
}

export interface SelectFormVal {
  [index: number]: {
    label: string;
    value: string;
  };
}
export const orderTypeList: SelectFormVal = [
  { label: 'For Here', value: 'For Here' },
  { label: 'To Go', value: 'To Go' },
];
export const currencyList: SelectFormVal = [
  { label: 'US Doller ($)', value: 'USD' },
];
