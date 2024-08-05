function navResponsive() {
    var x = document.getElementById("header");
    if (x.className === "navibar") {
      x.className += " responsive";
    } else {
      x.className = "navibar";
    }
  }