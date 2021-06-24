export function overflowText(
  text: string,
  max: number,
  suffix: string = "……"
): string {
  if (text.length <= max) return text;
  if (max <= suffix.length) {
    return text.slice(0, max);
  } else {
    return `${text.slice(0, max - suffix.length)}${suffix}`;
  }
}
