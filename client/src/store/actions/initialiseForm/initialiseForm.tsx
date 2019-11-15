import { ActionTypes } from '../types';

export interface InitialiseFormAction {
  type: ActionTypes.initialiseForm;
  payload: any;
}

export const setFormValues = (payload): InitialiseFormAction => ({
  type: ActionTypes.initialiseForm,
  payload
});
