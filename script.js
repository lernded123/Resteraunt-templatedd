//Tabbed Menu
function openMenu(event, menuName) {
  let menuArray = document.getElementsByClassName("menu");
  for (i = 0; i < menuArray.length; i++) {
    menuArray[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < menuArray.length; i++) {
    tablinks[i].classList.remove("active-tab");
  }

  document.getElementById(menuName).style.display = "block";
}
