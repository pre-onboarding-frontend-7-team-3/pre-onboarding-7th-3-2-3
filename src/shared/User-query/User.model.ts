export interface GetInvestmentAccount {
  broker_id?: string;
  is_active?: boolean;
  status?: string;
  q?: string;
  pageNum: number;
}

export interface FormDataType {
  photo: HTMLImageElement;
  gender_origin: string;
  age: number;
  name: string;
  birth_date: string;
  detail_address: string;
  phone_number: string;
  address: string;
  email: string;
  password: string;
  created_at: Date;
}
