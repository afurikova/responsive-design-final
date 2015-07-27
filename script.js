document.addEventListener("DOMContentLoaded", function(event) {
	console.log("JavaScript loaded");

	// add a function to open off canvas menu on
	// hamburger menu click
	var menu = document.getElementById("hamburger");
	var drawer = document.getElementById("drawer");

	menu.addEventListener('click', function(e) {
		// console.log("menu clicked");
  		drawer.classList.toggle('open');
 		e.stopPropagation();
	});
});