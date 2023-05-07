let sm = 0;

for (let i = 0; i < 40; ++i) {
  let rand = Math.random() * 100 + 1;
  sm += rand;
}

console.log(`Sum = ${sm}`);
