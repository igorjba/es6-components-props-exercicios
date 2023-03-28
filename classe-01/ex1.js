function sum(...args) {
  return args.reduce((acc, value) => acc + value);
}

console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 0, 5)); // 48

