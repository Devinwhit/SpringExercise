export interface User {
  username: string;
  id: number;
  email: string;
  roles: string[];
  firstName: string;
  lastName: string;
  password: string;
}
export interface NewUser {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  roles: string[];
}
