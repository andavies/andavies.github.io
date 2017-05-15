/**
  * Toggles nav between menu-open and menu-closed states
  * Andy Davies 08/05/17
  */

(function() {
	document.getElementById("main-menu-icon").onclick = toggleClass;

	function toggleClass() {

		var menu = document.getElementById("main-menu");

		menu.classList.toggle("menu-closed");
		menu.classList.toggle("menu-open");

	}
}())
