import { from, Observable, of } from "rxjs";

export function ensureIsObservable<T = any>(
  value: T | Promise<T> | Observable<T>
): Observable<T> {
  if (value instanceof Observable) return value;
  if (value instanceof Promise) return from(value);
  return of(value);
}
