
// Get all the li elements within the menu
var menuItems = document.querySelectorAll('#horizontal-image .shs-item-activiti-column');
var formApply = document.querySelector('.hsh-form-apply');
var btnApplys = document.querySelectorAll('.btn-apply');

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

// Js active form
btnApplys.forEach(function(btnApply) {
	btnApply.addEventListener('click', function() {
		formApply.classList.add('active');
	});
});
// Close form when clicking outside form
window.addEventListener('click', function(event) {
	var positionTarget = event.target;
	if (!formApply.contains(positionTarget) && ![...btnApplys].some(btnA => btnA.contains(positionTarget))) {
	console.log('0');
		formApply.classList.remove('active');
	}
})