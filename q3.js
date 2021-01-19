function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
}

function first(array, n = 1) {
  let out = " ";
  n = Math.min(n, array.length);
  let local = [];

  for (let i = 0; i < n; i++) {
    local.push(array[i]);
  }
  return local;
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
