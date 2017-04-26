/**
  * Allows the user to select the category of 'featured work' shown on index.html
  */

var tabs = document.querySelectorAll(".tab");

for (var i = 0; i < tabs.length; i++){
	tabs[i].onclick = tabHandler;
}

function tabHandler(event){

	// if tab 'active', exit
	if (event.currentTarget.classList.contains("active")){
		return false;
	}

	// else, remove current active
	for (var i = 0; i < tabs.length; i++){
		tabs[i].classList.remove("active");
	}

	// set new active
	event.currentTarget.classList.add("active");	

	// hide current grid

	// display selected grid

}