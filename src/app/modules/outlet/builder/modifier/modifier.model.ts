export interface Modifier {
  id?: string;
  name?: string;
  isMultiChoice?: boolean;
  minChoice?: number;
  maxChoice?: number;
  item?: Array<Row>;
}

interface Row {
  name: string;
  price: number;
  ingredient: string;
}
