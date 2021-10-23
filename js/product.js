function show(show, hide) {
  let x = document.getElementById(`${show}`);
  x.classList.add("hide");
  let y = document.getElementById(`${hide}`);
  y.classList.add("show");
  document.getElementById("option").style.display = "block";
}

function hide(show, hide) {
  let x = document.getElementById(`${show}`);
  x.classList.remove("hide");
  let y = document.getElementById(`${hide}`);
  y.classList.remove("show");
  document.getElementById("option").style.display = "none";
}
