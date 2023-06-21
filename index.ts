function toArray<T>(iterator: Iterable<T>): T[] {
  return [...iterator];
}

const set = new Set(['apple', 'banana', 'orange']);

const map = new Map<string, unknown>([
  ['name', 'nabin'],
  ['age', 20],
  ['email', 'nabin@gmai.com'],
]);

console.log('set is', set);
const result = toArray(set);
const mappedType = toArray(map);
console.log('mapped type is', mappedType);
console.log(
  'exampel si',
  result.flatMap((res) => res),
);
