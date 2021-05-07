export interface ILogin {
  id: number;
  avatar: string;
  email: string;
  userName: string;
  passWord: string;
  role: [];
  oldPassWord?: string;
  newPassWord?: string;
}
