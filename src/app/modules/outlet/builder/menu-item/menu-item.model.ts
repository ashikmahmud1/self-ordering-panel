export interface MenuItem {
  id?: string;
  isDisabled?: boolean;
  name?: string;
  category?: string;
  desc?: string;
  display?: {
    image?: string;
    serve?: string;
    ribbon?: string;
  };
  modifier?: {
    modifiers?: Array<string>;
    size?: Array<Row>;
  };
  price?: number;
}

interface Row {
  name: string;
  price: number;
  addons: Array<string>;
}

export interface SelectFormVal {
  [index: number]: {
    label: string;
    value: string;
  };
}
export const displayRibbonList: SelectFormVal = [
  { label: 'None', value: 'None' },
  { label: 'Best Seller', value: 'Best Seller' },
  { label: 'Chef`s Special', value: 'Chef`s Special' },
  { label: 'Recommended', value: 'Recommended' },
  { label: 'Low Calorie', value: 'Low Calorie' },
  { label: 'Spicy', value: 'Spicy' },
  { label: 'Healthy', value: 'Healthy' },
  { label: 'Trending', value: 'Recommended' },
];
