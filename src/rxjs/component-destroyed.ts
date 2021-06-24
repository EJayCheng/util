import { Observable, Subject } from "rxjs";

export type OnDestroyLike = {
  ngOnDestroy(): void;
};
/**
 * angular component destroy 時自動解除訂閱.
 * ```typescript
 * .pipe(takeUntil(componentDestroyed(this))
 * ```
 */
export function componentDestroyed(component: OnDestroyLike): Observable<void> {
  let originNgOnDestroy = component.ngOnDestroy;
  let stop$ = new Subject<void>();
  component.ngOnDestroy = () => {
    if (typeof originNgOnDestroy === "function") {
      try {
        originNgOnDestroy.apply(component);
      } catch (error) {
        console.error(
          `Error ${component.constructor.name}.ngOnDestroy:`,
          error
        );
      }
    }
    try {
      stop$.next(null);
      stop$.complete();
    } catch (err) {}
  };
  return stop$;
}
