export interface PaymentModel {
  id?:string,
  type?: string;
  condition?: {
    applyType?: {
      isDelivery?: boolean;
      isPickup?: boolean;
      isTableRes?: boolean;
    };
    ordAmnt?: {
      min?: number;
      max?: number;
    };
  };
  config?: {
    id?: string;
    key?: string;
    salt?: string;
  };
  others?: {
    currency?: string;
  };
}
