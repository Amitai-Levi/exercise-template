function run() {
  let input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  if (is_array(input)) {
    input = arrayKing(input);
    for (let i = 0; i < input.length; i++) {
      if (is_array(input[i])) {
        input[i] = toArray(input[i]);
      }
    }
    printArray(input);
  }
  function printArray(arr) {
    if (!Array.isArray(arr)) {
      console.log("The input is not array");
    } else {
      for (let i = 0; i < arr.length; i++) {
        out += "row " + i + ": ";
        if (Array.isArray(arr[i])) {
          for (let x = 0; x < arr[i].length; x++) {
            out += arr[i][x] + " , ";
          }
        } else {
          out = "At least one of th elements is not an array";
        }
      }
    }
  }

  /**/
  output.innerText = out;
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
// similar function to an array of arrays
function arrayKing(str) {
  let resolt = [];
  let value = "";

  for (let i = 1; i < str.length - 1; i++) {
    if (str[i - 1] === "]") {
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
