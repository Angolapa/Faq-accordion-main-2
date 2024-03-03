function toggleParagraph() {
    var paragraph = document.getElementById("paragraph");
    var icon = document.getElementById("icon");
  
    if (paragraph.style.display === "none" || !paragraph.style.display) {
      paragraph.style.display = "block";
      icon.src = "./assets/images/icon-minus.svg";
    } else {
      paragraph.style.display = "none";
      icon.src = "./assets/images/icon-plus.svg";
    }
  }