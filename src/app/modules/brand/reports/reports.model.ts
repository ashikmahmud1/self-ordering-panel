export interface Reports {
  address?: {
    coords?: {
      lat: number;
      lon: number;
    };
    locality: string;
    name: string;
    text: string;
  };
  carts?: any;
  created_at?: string;
  driver?: {
    condition?: {
      isAllOutlet: boolean;
      outlets: string;
      driverID: string;
      email: string;
      id: string;
      name: string;
    };
  };
  order_id?: number;
  order_type?: string;
  other?: {
    cusEmail: string;
    cusName: string;
  };
  outletId?: string;
  payment?: string;
  status?: string;
  timeslot?: string;
  total?: {
    amount: number;
    discount_amount: number;
    final_amount: number;
  };
  uid?: string;
}

export const defaultReports = {
  address: {
    coords: {
      lat: 0,
      lon: 0,
    },
    locality: '',
    name: '',
    text: '',
  },
  created_at: '',
  driver: {
    condition: {
      isAllOutlet: false,
      outlets: '',
      driverID: '',
      email: '',
      id: '',
      name: '',
    },
  },
  order_id: 0,
  order_type: '',
  other: {
    cusEmail: '',
    cusName: '',
  },
  outletId: '',
  payment: '',
  status: '',
  timeslot: '',
  total: {
    amount: 0,
    discount_amount: 0,
    final_amount: 0,
  },
  uid: '',
};
