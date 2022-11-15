export interface UserDetailProps {
  address: string;
  age: number;
  birth_date: string;
  created_at: string;
  detail_address: string;
  email: string;
  gender_origin: number;
  id: number;
  last_login: string;
  name: string;
  phone_number: string;
  photo: string;
  updated_at: string;
  uuid: string;
}

export interface UserSettingProps {
  id: number;
  uuid: string;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  updated_at: string;
}
