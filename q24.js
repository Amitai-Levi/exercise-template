function run() {
  let input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  if (is_array(input)) {
    input = toArray(input);
    output.innerText = clean(input);
  }
  /**/
}

function clean(arr) {
  let resolt = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] != "0" &&
      arr[i] != "null" &&
      arr[i] != "undefined" &&
      arr[i] != "false" &&
      arr[i] != "" &&
      arr[i] != "NaN" &&
      arr[i] != undefined
    ) {
      resolt.push(arr[i]);
    }
  }
  return resolt;
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
