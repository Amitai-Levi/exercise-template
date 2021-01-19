function instruction() {
  document.getElementById("instructions").innerText =
    "Type the year in an array, like this - [1998,2225]. type 2 years, extra years won't be considered";
}
function run() {
  let input = document.getElementById("input").value;
  const output = document.getElementById("output");
  output.innerText =
    "please insert the range as an array with the earlier year first";
  if (is_array(input)) {
    input = toArray(input);
    input = arrToNumber(input);
    if (input != -1 && input[0] != undefined && input[1] != undefined) {
      let start = input[0];
      let end = input[1];
      output.innerText = allLeaps(start, end);
    } else {
      alert("The input is invalid");
    }
  } else {
    alert("The input is invalid");
  }
}
// the function return all of the leap years in the given range
// with the help of the function "isLeap"
function allLeaps(start, end) {
  let resolt = [];

  if (start < end) {
    for (let i = start; i <= end; i++) {
      if (isLeap(i)) {
        resolt.push(i);
      }
    }
    return resolt;
  } else {
    alert("earlier year first!");
    return "please insert the range as an array with the earlier year first";
  }
}
// the function checks if a year is leap
function isLeap(year) {
  return (year % 4 === 0 && year % 100 != 0) || year % 400 == 0;
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
