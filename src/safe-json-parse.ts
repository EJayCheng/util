export function safeJsonParse<T = any>(
  data: string,
  defaultValue: any = null
): T {
  try {
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}
