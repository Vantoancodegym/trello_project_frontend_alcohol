import {IRole} from './i-role';

export interface IUserToken {
  roles?: IRole[]
  id?: number;
  username?: string;
  passWord?: string;
  email?: string;
  accessToken?: string;
  avatar?: string
}
