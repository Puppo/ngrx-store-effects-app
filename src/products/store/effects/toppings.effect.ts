
import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as toppingsAction from '../actions/toppings.action';
import * as fromServices from '../../services/toppings.service';

@Injectable()
export class ToppingsEffects {
  constructor(
    protected actions$: Actions,
    protected toppingService: fromServices.ToppingsService
  ) { }

  @Effect()
  loadToppings$ = this.actions$
    .ofType(toppingsAction.LOAD_TOPPINGS)
    .pipe(
      switchMap(() => {
        return this.toppingService.getToppings().pipe(
          map(toppings => new toppingsAction.LoadToppingsSuccess(toppings)),
          catchError(error => of(new toppingsAction.LoadToppingsFail(error)))
        );
      })
    );

}
