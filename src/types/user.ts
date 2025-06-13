export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  password: string;
  position: string;
  power: number;
  address: string;
}

export interface CreateUserRequest {
  user: User;
}

export interface CreateUserResponse {
  user: User;
}

export interface GetUserRequest {
  id: number;
}

export interface GetUserResponse {
  user: User;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface GetAllUsersRequest {}
export interface GetAllUsersResponse {
  users: User[];
}