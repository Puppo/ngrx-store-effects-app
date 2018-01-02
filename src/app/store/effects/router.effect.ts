import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Effect, Actions } from '@ngrx/effects';
import * as fromRouterActions from '../actions/router.actions';

import { tap, map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {

  constructor(
    protected actions$: Actions,
    protected router: Router,
    protected location: Location
  ) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$
    .ofType<fromRouterActions.Go>(fromRouterActions.GO)
    .pipe(
      map((action: fromRouterActions.Go) => action.payload),
      tap(({ path, query: queryParams, extras }) => {
        this.router.navigate(path, { queryParams, ...extras });
      })
    )

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$
    .ofType<fromRouterActions.Back>(fromRouterActions.BACK)
    .pipe(tap(() => this.location.back()));

    @Effect({ dispatch: false })
    navigateForward$ = this.actions$
      .ofType<fromRouterActions.Forward>(fromRouterActions.FORWARD)
      .pipe(tap(() => this.location.forward()));
}
