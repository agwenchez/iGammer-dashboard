export interface User {
  firstName: string;
  lastName: string;
  username: string;
}

export interface AuthState {
  user: User | null;
  access_token: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User | null;
  access_token: string | null;
  refresh_token: string | null;
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
