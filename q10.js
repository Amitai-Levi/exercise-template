function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/

  /**/
  output.innerText = out;
}
function printArray(arr) {
  if (!Array.isArray(arr)) {
    console.log("The input is not array");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log("row " + i);
      if (Array.isArray(arr[i])) {
        for (let x = 0; x < arr[i].length; x++) {
          console.log(arr[i][x]);
        }
      } else {
        console.log("The current element is not array");
      }
    }
  }
}
