function normalFunction() {
  return 'random function fizz buzz';
}

console.log(normalFunction());

function* generatorFunction() {
  //   return 'random generator function fizz buzz';
  for (let i = 0; i < 5; i++) {
    yield i;
  }
}

const gen = generatorFunction();

while (!gen.next().value) {
  console.log('gen ', gen.next());
}
console.log('next gen ', gen[Symbol.iterator]().next());

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const iterate: Iterator<number> = arr[Symbol.iterator]();

while (true) {
  const next = iterate.next();
  if (!next.done) {
    console.log('values for the data ', next);
  } else {
    break;
  }
}
