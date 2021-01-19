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
