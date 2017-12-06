
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

import * as fromPizzas from './pizza.reducers';
import * as fromToppings from './toppings.reducers';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState,
  toppings: fromToppings.ToppingsState,
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer,
}

export const getProductState = createFeatureSelector<ProductsState>(
  'products'
);
