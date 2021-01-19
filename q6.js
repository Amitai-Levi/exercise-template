function instruction() {
  document.getElementById("instructions").innerText = "Insert only number";
}
function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  dashes(input);
  function dashes(input) {
    let num = parseInt(input);

    if (isNaN(num)) {
      out = "The input is not a number";
    } else {
      for (let i = 0; i < input.length - 1; i++) {
        out += input[i];

        if (parseInt(input[i]) % 2 === 0 && parseInt(input[i + 1]) % 2 === 0) {
          out += "-";
        }
      }
      out += input[input.length - 1];
    }
  }

  /**/
  output.innerText = out;
}
