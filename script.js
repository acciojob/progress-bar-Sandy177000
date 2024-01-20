let index = 1;

function prev() {
  if (index > 1) {
    let curr = document.getElementById(`${index}`);
    index--;
    curr.classList.remove("active");
  }
}

function next() {
  if (index < 5) {
    index++;
    let curr = document.getElementById(`${index}`);
    curr.classList.add("active");
    console.log(curr);
  }
}
