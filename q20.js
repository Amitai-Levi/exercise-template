function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/

  /**/
  output.innerText = out;
}
function findDup(arr) {
  let resolt = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (resolt.indexOf(arr[i]) === -1) {
      for (let x = i + 1; x < arr.length; x++) {
        if (arr[i] === arr[x]) {
          resolt.push(arr[i]);
          break;
        }
      }
    }
  }
  console.log(resolt);
}
