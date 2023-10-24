//Tabbed Menu
function openMenu(event, menuName) {
  let menuArray = document.getElementsByClassName("menu");
  for (i = 0; i < menuArray.length; i++) {
    menuArray[i].computedStyleMap.display = "none";
  }
  let tablinks = document.getElementsByClassName("tablinks");
}
