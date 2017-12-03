
import { Injectable } from '@angular/core';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Effect, Actions } from '@ngrx/effects';

import * as pizzaActions from '../actions';

import { PizzasService } from '../../services';

@Injectable()
export class PizzasEffects {

  constructor (protected actions$: Actions
                , protected pizzasService: PizzasService) { }

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
    .pipe(
      switchMap(() => {
        return this.pizzasService
          .getPizzas()
          .pipe(
            map((pizzas) => new pizzaActions.LoadPizzasSuccess(pizzas)),
            catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
          );
      })
    );

}
