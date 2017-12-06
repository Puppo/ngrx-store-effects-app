
import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducers';

export const getToppingsState = createSelector(
  fromFeature.getProductState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingsEntries = createSelector(
  getToppingsState,
  fromToppings.getToppingEntities
);

export const getAllToppings = createSelector(
  getToppingsEntries,
  entities => Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingLoading
);
