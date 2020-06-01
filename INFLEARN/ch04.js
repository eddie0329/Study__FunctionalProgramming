const log = console.log;

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 25000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 35000 },
];

// map
const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

log(map((p) => p.name, products));
log(map((p) => p.price, products));

let m = new Map();
m.set("a", 10);
m.set("b", 20);
const it = m[Symbol.iterator]();
log(map(([k, a]) => [k, a * 2], m));

log("-----------------");

// filter

const filter = (f, products) => {
  let res = [];
  for (const p of products) {
    if (f(p)) res.push(p);
  }
  return res;
};

filter((p) => p.price < 20000, products);
log(...filter((p) => p.price < 20000, products));

// reduce

const nums = [1, 2, 3, 4, 5];
let total = 0;

for (const n of nums) {
  total += n;
}
log(total);

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};
const add = (a, b) => a + b;
log(reduce(add, [1, 2, 3, 4, 5]));
log(reduce((total_price, product) => total_price + product.price, 0, products));

// 중첩사용

log(
  reduce(
    add,
    map(
      (p) => p.price,
      filter((p) => p.price < 30000, products)
    )
  )
);
