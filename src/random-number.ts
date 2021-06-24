export function randomNumber(
  min: number = 0,
  max: number = 1,
  isInteger: boolean = false
) {
  let r = Math.random() * (max - min) + min;
  return isInteger ? Math.round(r) : r;
}

export function randInteger(min: number = 0, max: number = 1) {
  return randomNumber(min, max, true);
}
