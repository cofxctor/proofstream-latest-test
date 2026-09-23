export type Entry = { at: number; amount: number };
export function total(entries: Entry[]): number {
  return entries.reduce((sum, e) => sum + e.amount, 0);
}
