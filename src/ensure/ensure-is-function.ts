const emptyFunction = (): void => {};

export function ensureIsFunction(fn: Function): Function {
  return typeof fn === "function" ? fn : emptyFunction;
}
