function run() {
  let input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  if (is_array(input)) {
    input = toArray(input);
    sort(input);
  }
  function sort(arr) {
    let newArr = [];
    arr = arrToNumber(arr);
    if (arr === -1) {
      out = "At least on of the veriables is not a number";
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] != -Infinity) {
          newArr.push(Math.max(...arr));
          arr[arr.indexOf(Math.max(...arr))] = -Infinity;
        }
      }
      out = newArr;
    }
    /**/

    output.innerText = out;
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
  if (input[0] === "[" && input[InputDeviceInfo.length - 1] === "]") {
    return true;
  } else {
    return false;
  }
}
//the turns the array to array of numbers. if it's not posible it returns -1
function arrToNumber(arr) {
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] != -Infinity) {
      arr[a] = parseInt(arr[a]);
      if (isNaN(arr[a])) {
        alert("At least one of the insert is not a number");
        return -1;
      }
    }
  }

  return arr;
}
