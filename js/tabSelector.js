/**
  * Allows the user to select the category of 'featured work' shown on index.html
  * Andy Davies 26/04/17
  */

(function() {

	var tabs = document.querySelectorAll(".tab");

	for (var i = 0; i < tabs.length; i++){
		tabs[i].onclick = tabHandler;
	}

	function tabHandler(event){

		// find all our elements first
		var grids = document.querySelectorAll(".featured-grid");
		var selectedId = event.currentTarget.getAttribute("data-reference");
		var selectedElement = document.getElementById(selectedId);

		/* 
		 * Note: at time of writing (04/17), have to use getAttribute() 
		 * rather than dataset.reference because of IE
		 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
		 */

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

		// hide current grid (hide all grids)	
		for (var i = 0; i < grids.length; i++){
			grids[i].classList.add("hidden");
		}

		// display selected grid	
		selectedElement.classList.remove("hidden");

	}

}())