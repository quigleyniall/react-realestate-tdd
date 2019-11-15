import { SearchListingsAction } from './listings/listings';
import { InitialiseFormAction } from './initialiseForm/initialiseForm';

export enum ActionTypes {
  search,
  initialiseForm
}

export type Action = SearchListingsAction | InitialiseFormAction;
