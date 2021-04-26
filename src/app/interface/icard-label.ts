import {ICard} from './i-card';
import {ILabel} from './label';

export interface ICardLabel {
  id?: number
  card? : ICard,
  labels?: ILabel
}
