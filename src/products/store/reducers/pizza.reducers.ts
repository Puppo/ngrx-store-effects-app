
import { Action } from '@ngrx/store';

import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';


export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {

  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      }
    }
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      }
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
    default:
      return state
  }

}

export function getPizzasLoading(state: PizzaState): boolean {
  return state.loading;
}
export function getPizzasLoaded(state: PizzaState): boolean {
  return state.loaded;
}
export function getPizzas(state: PizzaState): Pizza[] {
  return state.data;
}
