function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  output.innerText = out;
}
function allLeaps(start, end) {
  for (let i = start; i <= end; i++) {
    if (isLeap(i)) {
      console.log(i);
    }
  }
}
function isLeap(year) {
  return (year % 4 === 0 && year % 100 != 0) || year % 400 == 0;
}
/**/
