import {
  SearchListingsAction,
  SelectListingsAction
} from './listings/listings';

export enum ActionTypes {
  search,
  select
}

export type Action = SearchListingsAction | SelectListingsAction;
