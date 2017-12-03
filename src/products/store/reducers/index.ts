
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'

import * as fromPizzas from './pizza.reducers';
import { getPizzas } from './pizza.reducers';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
}

export const getProductState = createFeatureSelector<ProductsState>(
  'products'
);

export const getPizzaState = createSelector(
  getProductState,
  (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
