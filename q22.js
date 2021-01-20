function instruction() {
  document.getElementById("instructions").innerHTML =
    'insert two arrays<br><input id="input2" type="text" />';
}
function run() {
  let input = document.getElementById("input").value;
  let input2 = document.getElementById("input2").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  if (is_array(input) && is_array(input2)) {
    input = toArray(input);
    input2 = toArray(input2);
    input = arrToNumber(input);
    input2 = arrToNumber(input2);

    if (
      input !== -1 &&
      input[0] !== undefined &&
      input2 !== -1 &&
      input2[0] !== undefined
    ) {
      out = union(input, input2);
    } else {
      alert("The input is invalid");
    }
  } else {
    alert("The input is invalid");
  }

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
    if (resolt.indexOf(min) === -1) {
      resolt.push(min);
    }
    arr1[arr1.indexOf(min)] = Infinity;
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

// the function turns a array of string that contain numbers to numbers
function arrToNumber(arr) {
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] != -Infinity) {
      if (parseInt(arr[a]) != NaN) {
        arr[a] = parseInt(arr[a]);
      } else {
        alert("At least one of the insert is not a number");
        return -1;
      }
    }
  }

  return arr;
}
