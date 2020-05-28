const log = console.log;

const a = 10;
// const add10 = (a) => a + 10;
// const r = add10(a);

// log(r); // 20;

const add5 = (a) => a + 5;
log(add5); // function
log(add5(5)); // 10

const apply1 = (f) => f(1);
const add2 = (a) => a + 2;
log(apply1(add2)); // 3
log(apply1((a) => a - 1)); //0

const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};

times(log, 3); // 0 1 2
times((a) => log(a + 10), 3); // 10 11 12

const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10);
log(add10);
log(add10(10)); // 20;
log(add10(5)); // 15;
