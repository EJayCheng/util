import { OperatorFunction } from "rxjs";
import { map } from "rxjs/operators";

export function arrayFilter<T>(
  fn: (item: T, index: number, array: T[]) => boolean
): OperatorFunction<T[], T[]> {
  return map<T[], T[]>((list) => {
    if (!(list instanceof Array)) {
      throw new Error(
        `value must be an array, but it is ${typeof list}: ${list}`
      );
    }
    return list.filter((item, index, array) => fn(item, index, array));
  });
}
