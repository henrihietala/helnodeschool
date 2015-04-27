var sum = 0;
for (var num in process.argv) {
  if (num < 2) continue; // first is always node and second is the path
  sum = sum + Number(process.argv[num]);
}

console.log(sum);
