export function ensureIsArray<T = any>(value: T | T[]): T[] {
  if (value instanceof Array) return value;
  return value === undefined ? [] : [value];
}
