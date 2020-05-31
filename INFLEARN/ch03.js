const log = console.log;

function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 100;
}
let iter = gen();
log(iter[Symbol.iterator]);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

for (const a of gen()) log(a);

// [Function: [Symbol.iterator]]
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 100, done: true }
// { value: undefined, done: true }

log("----------------");

// odds
function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}

function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}
let iter2 = odds(10);
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());

log("---------");
for (const a of odds(40)) log(a);

const [a, b, ...rest] = odds(40);
log(a);
log(b);
log(rest);
