export interface Stock {
  id: number;
  registered_at: Date;
  name: string;
  quantity: number;
  validity: Date;
  updated_at: Date;
  category: {
    id: number;
    name: string;
  };
}

export interface Category {
  id: number;
  name: string;
}

export interface Movements {
  id: string;
  reason: string;
  user: string;
  quantity: string;
  type: string;
  movement_date: Date;
  item: string;
}
