import {IRole} from './i-role';

export interface IUserToken {
  roles?: IRole[]
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  accessToken?: string;
}
