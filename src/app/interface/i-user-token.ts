import {IRole} from './i-role';

export interface IUserToken {
  roles?: IRole[]
  id?: number;
  userName?: string;
  passWord?: string;
  email?: string;
  accessToken?: string;
  avatar?: string
}
