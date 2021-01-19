function run() {
  let input = document.getElementById("input").value;
  const output = document.getElementById("output");
  /**/
  if (is_array(input)) {
    input = toArray(input);
    findDup(input);
  }
  /**/
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
  output.innerText = resolt;
}
//the function turns a string into a array
function toArray(str) {
  let resolt = [];
  let value = "";

  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] === ",") {
      resolt.push(value);
      value = "";
    } else {
      value += str[i];
    }
  }
  if (value != "") {
    resolt.push(value);
  }
  return resolt;
}
// the function checks if the input string is in an array platform (q1)
function is_array(input) {
  if (input[0] === "[" && input[input.length - 1] === "]") {
    return true;
  } else {
    return false;
  }
}
