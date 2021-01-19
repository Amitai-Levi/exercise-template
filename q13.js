let elements = [];
let out = "";
let output;
function run() {
  const input = document.getElementById("input").value;
  output = document.getElementById("output");
  elements.push(input);
}
function display() {
  for (let i = 0; i < elements.length - 1; i++) {
    out += elements[i] + " , ";
  }
  if (elements.length > 0) {
    out += elements[elements.length - 1];
  }
  output.innerText = out;
  out = "";
}
