function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  is_array(input);
  // since in this case input wiil always be a string, because the input type
  // is text (at least I don't know a way), I reffer to it as true if it is
  // written like an array - inside [].
  function is_array(input) {
    if (input[0] === "[" && input[InputDeviceInfo.length - 1] === "]") {
      out = true;
    } else {
      out = false;
    }
  }
  // if there is an option to insert a real array, this function will check it
  // more accurately
  function is_array1(input) {
    out = Array.isArray(input);
  }
  /**/
  output.innerText = out;
}
