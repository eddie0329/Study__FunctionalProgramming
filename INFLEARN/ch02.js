const log = console.log;

log("Arr--------");
const list = [1, 2, 3];
const iter1 = list[Symbol.iterator]();
iter1.next();
for (const a of iter1) {
  log(a); // 2 3
}

log("Set--------");
const set = new Set([1, 2, 3]);
const iter2 = set[Symbol.iterator]();
iter2.next();
for (const a of iter2) {
  log(a); // 2 3
}

log("Map--------");
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const a of map) {
  log(a);
}

log("------------");
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());

for (const a of iterator) log(a);
log("------------");

const arr2 = [1, 2, 3];
let iter3 = arr2[Symbol.iterator]();

for (const a of iter3) log(a);
