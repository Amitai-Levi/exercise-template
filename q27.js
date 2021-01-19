function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/

  /**/
  output.innerText = out;
}
function propVal(arr, prop) {
  let resolt = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][prop] != undefined) {
      resolt.push(arr[i][prop]);
    }
  }
  return resolt;
}
