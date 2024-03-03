function toggleParagraph(containerId) {
  var container = document.getElementById(containerId);
  var paragraph = container.querySelector(".main-container__s__details__div__p");
  var icon = container.querySelector(".main-container__s2__div__icon");

  if (paragraph.style.display === "none" || !paragraph.style.display) {
    paragraph.style.display = "block";
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    paragraph.style.display = "none";
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
}