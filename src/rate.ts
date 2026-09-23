export type Entry = { at: number; amount: number };
export function total(entries: Entry[]): number {
  return entries.reduce((sum, e) => sum + e.amount, 0);
}
/** The average amount per second across a window. A window of zero seconds has
 *  no rate to report, so it returns 0 rather than Infinity. */
export function rateOver(entries: Entry[], seconds: number): number {
  if (seconds === 0) return 0;
  return total(entries) / seconds;
}
