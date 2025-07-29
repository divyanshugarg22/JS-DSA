const source1 = { a: 1, b: 2 };
const source2 = { c: 1, d: {e:2}};
const target = {};

Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 2 }
target.d.e = 10;
console.log(target); // { a: 1, b: 2 }
console.log(source2); // { a: 1, b: 2 }

