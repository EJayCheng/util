import { OperatorFunction } from "rxjs";
import { map } from "rxjs/operators";

export function sortList<T>(
  fn: (a: T, b: T) => number
): OperatorFunction<T[], T[]> {
  return map<T[], T[]>((list) => {
    if (!(list instanceof Array)) {
      throw new Error(
        `value must be an array, but it is ${typeof list}: ${list}`
      );
    }
    return list.sort((a: T, b: T) => fn(a, b));
  });
}
