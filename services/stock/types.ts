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

/**
 * Payload de insert da tabela `stock`.
 * Difere do `Stock` (formato de leitura, com o join de categoria):
 * `id`, `registered_at` e `updated_at` são gerados pelo banco, e a coluna
 * `category` é a FK (bigint) para `categories.id`, não o objeto aninhado.
 */
export interface StockInsert {
  name: string;
  quantity: number;
  validity: string;
  category: number;
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
