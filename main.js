function toggleParagraph(containerId) {
  var container = document.getElementById(containerId);
  var paragraph = container.querySelector(".main-container__s__div__p");
  var icon = container.querySelector(".main-container__s2__div__icon");

  if (paragraph.style.display === "none" || !paragraph.style.display) {
    paragraph.style.display = "block";
    icon.src = "./assets/images/icon-minus.svg";
  } else {
    paragraph.style.display = "none";
    icon.src = "./assets/images/icon-plus.svg"; 
  }
}