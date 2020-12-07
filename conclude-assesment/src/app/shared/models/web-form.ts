export interface WebForm {
  idNum: string;
  name: string;
  surname: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  country: string;
  postal: string;
  created_at: Date;
}

export interface UserView {
  rows: WebForm;
}
