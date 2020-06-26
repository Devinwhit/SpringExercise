export interface UserProfileDTO {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}
export interface NewUser {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  roles: string[];
}
