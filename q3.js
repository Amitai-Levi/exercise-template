function instruction() {
  document.getElementById("instructions").innerHTML =
    'First input = array, second = n<br><input id="input2" type="text" />';
}

function run() {
  array = document.getElementById("input2").value;
  const n = document.getElementById("input").value;
  const output = document.getElementById("output");
  if (is_array(array) && !isNaN(parseInt(n))) {
    array = toArray(array);
    output.innerText = first(array, parseInt(n));
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
