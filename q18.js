function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/

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
