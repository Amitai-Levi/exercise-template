function instruction() {
  document.getElementById("instructions").innerText =
    "The input here doesn't work, try to reach the function 'union(array1,array2)' in the console";
}
function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/

  /**/
  output.innerText = out;
}

function union(arr1, arr2) {
  let resolt = [];
  let min;
  for (let x = 0; x < arr2.length; x++) {
    arr1.push(arr2[x]);
  }

  for (let i = 0; i < arr1.length; i++) {
    min = Math.min(...arr1);
    resolt.push(min);
    arr1[arr1.indexOf(min)] = Infinity;
  }
  return resolt;
}
