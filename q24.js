function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/

  /**/
  output.innerText = out;
}

function clean(arr) {
  let resolt = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] != 0 &&
      arr[i] != null &&
      arr[i] != undefined &&
      arr[i] != false &&
      arr[i] != "" &&
      arr[i] != NaN
    ) {
      resolt.push(arr[i]);
    }
  }
  return resolt;
}
