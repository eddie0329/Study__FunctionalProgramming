const log = console.log;

const { map, reduce, filter } = require("./ch04");

const products = [
  { name: "a", price: 1 },
  { name: "b", price: 2 },
  { name: "c", price: 3 },
  { name: "d", price: 4 },
  { name: "e", price: 5 },
  { name: "f", price: 6 },
  { name: "g", price: 7 },
];

log("----------ch05---------");
log(
  reduce(
    (a, c) => a + c,
    filter(
      (p) => p <= 3,
      map((p) => p.price, products)
    )
  )
);

// go

log("----------go---------");

const go = (...args) => reduce((a, f) => f(a), args);

go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  log
);

// pipe

log("---------pipe-------");

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const f = pipe(
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);
log(f(0));

const f2 = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);
log(f2(0, 1));

log("----------------------");
go(
  products,
  (products) => filter((p) => p.price <= 3, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce((a, b) => a + b, prices),
  log
);

log("---------curry---------");
const curry = (f) => (a, ..._) =>
  _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a * b);
log(mult(1)(2));

const mult3 = mult(3);
log(mult3(1));
log(mult3(2));
log(mult3(3));

const Cfilter = curry(filter);
const Cmap = curry(map);
const Creduce = curry(reduce);
log("--------------------------");

const total_price = pipe(
  Cmap((p) => p.price),
  Creduce((a, b) => a + b)
);

const base_total_price = (predi) => pipe(Cfilter(predi), total_price);

go(
  products,
  base_total_price((p) => p.price <= 3),
  log
);
