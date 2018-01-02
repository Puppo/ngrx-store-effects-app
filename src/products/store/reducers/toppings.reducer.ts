
import * as fromToppings from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';

export interface ToppingsState {
  entities: { [id: number]: Topping },
  loaded: boolean;
  loading: boolean;
  selectedToppings: number[];
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: [],
}

export function reducer (
  state = initialState,
  action: fromToppings.ToppingsActions
): ToppingsState {

  switch(action.type) {

    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;


      return {
        ...state,
        selectedToppings
      };
    }

    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true
      }
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;

      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping
          };
        },
        {
          ...state.entities
        });

      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      }
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }

  return state;
}


export function getToppingEntities(state: ToppingsState) {
  return state.entities;
}

export function getToppingsLoaded(state: ToppingsState) {
  return state.loaded;
}
export function getToppingsLoading(state: ToppingsState) {
  return state.loading;
}

export function getSelectedToppings(state: ToppingsState) {
  return state.selectedToppings;
}
