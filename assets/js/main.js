
// Get all the li elements within the menu
var menuItems = document.querySelectorAll('#horizontal-image .shs-item-activiti-column');

// Add event listeners for mouseover and mouseout
menuItems.forEach(function(item) {
	item.addEventListener('mouseover', function() {
	  // Add the 'active' class when the mouse is over the element
	  item.classList.add('active');
	});

	item.addEventListener('mouseout', function() {
	  // Remove the 'active' class when the mouse leaves the element
	  item.classList.remove('active');
	});
});