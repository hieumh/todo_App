export function obj2ArrayShallow(obj) {
  if (!obj) return [];
  if (Array.isArray(obj)) return obj;
  return Object.keys(obj).map((key) => obj[key]);
}
