export function getDecimalPlaces(num: number) {
  const str = String(num);
  const match = str.match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) return 0;

  let fraction = match[1] || "";
  let exponent = match[2] ? parseInt(match[2], 10) : 0;

  if (exponent < 0) {
    return fraction.length - exponent;
  }
  return Math.max(0, fraction.length - exponent);
}
