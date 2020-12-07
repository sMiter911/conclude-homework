export interface Auth {
  id: number;
  name: string;
  email: string;
  password: string;
  access_token: string;
  expires_in: Number;
}

export interface User {
  user: Auth;
}
