export type AccountType = {
  id: number;
  user_id: number;
  uuid: string;
  broker_id: { id: string; name: string };
  status: { id: number; name: string };
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  userName: string;
};
