const card = document.querySelector(".card");

function callback() {
  card.classList.toggle("flip");
}

card.addEventListener("click", callback);
