export interface User {
  id: number;
  fullname: string;
  lastname: string;
  email: string;
  birthdate: string;
  gender: string;
  username: string;
  accessToken: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  access_token: string | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  data: User | null;
  message: string | null;
  error: string | null;
  status: number
}

export interface SignupResponse extends LoginResponse {}
export interface SignupRequest extends User {}

export interface LoginDto {
  username: string;
  password: string;
}
//   export interface AuthState {
//     user: User | null;
//     accessToken: string | null;
//   }

export interface Product {
  id: number;
  name: string;
  category: string;
  quantity: number;
  status: string;
  ratings: number;
  action: string;
}

export interface Products {
  products: Product[];
}
