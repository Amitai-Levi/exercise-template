function instruction() {
  document.getElementById("instructions").innerHTML =
    'First input = array, second = item to look <br><input id="input2" type="text" />';
}
function run() {
  let array = document.getElementById("input2").value;
  let item = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/

  if (is_array(array)) {
    array = toArray(array);
    array = arrToNumber(array);
    if (array != -1 && array[0] != undefined && !isNaN(parseInt(item))) {
      out = binary(array, parseInt(item));
    } else {
      alert("The input is invalid");
    }
  } else {
    alert("The input is invalid");
  }

  /**/
  output.innerText = out;
}
function binary(arr, item, first = 0, last = arr.length - 1) {
  let middle = Math.floor((first + last) / 2);

  if (arr[middle] === item) {
    return middle;
  }
  if (first >= last) {
    return -1;
  }
  if (arr[middle] > item) {
    return binary(arr, item, first, middle - 1);
  }
  if (arr[middle] < item) {
    return binary(arr, item, middle + 1, last);
  }
  return "error";
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
