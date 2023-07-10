const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggleButton");
const row = document.querySelector(".row");
toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  row.classList.toggle("open");
});
