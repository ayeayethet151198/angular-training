export interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  phone?: string;
  hobby?: string;
}
export interface Employee {
  id: number;
  name: string;
  department: string;
  gender: string;
  position: string;
  phNumber: string;
  joinDate: string;
}
export interface UserLogin {
  email: string;
  password: string;
}

export interface Post {
  id?: number;
  title: string;
  author: string;
}
