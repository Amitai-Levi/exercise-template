function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  is_array(input);
  function is_array(input) {
    if (input.indexOf("[") === 0 && input.indexOf("]") === input.length - 1) {
      out = true;
    } else {
      out = false;
    }
  }
  function is_array1(input) {
    out = Array.isArray(input);
  }
  /**/
  output.innerText = out;
}
