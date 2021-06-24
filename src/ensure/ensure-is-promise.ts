export function ensureIsPromise<T = any>(value: T | Promise<T>): Promise<T> {
  return value instanceof Promise ? value : Promise.resolve(value);
}
