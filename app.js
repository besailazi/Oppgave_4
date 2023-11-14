function showComponent(componentId) {
	// Hide all components
	const allComponents = document.querySelectorAll('.container section div');
	allComponents.forEach(component => {
		 component.classList.add('hidden');
	});

	
	// Show the selected component
	const selectedComponent = document.getElementById(`${componentId}-content`);
	selectedComponent.classList.remove('hidden');
}

function toggleComponent(componentId) {
	// Toggle the visibility of the selected component
	const selectedComponent = document.getElementById(`${componentId}-content`);
	selectedComponent.classList.toggle('hidden');
}


// Add javascript for the accordion 
const acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active");

    const item = this.nextElementSibling;
    if (item.style.display === "block") {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}

/*const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
	const accordionToggle = accordion.querySelector('.accordion__toggle');
	
	const displayAccordionContent = (event) => {
		accordion.classList.toggle('accordion--expanded');
	}
	
	accordionToggle.addEventListener('click', displayAccordionContent);
})

const componentTriggersButtons = document.querySelectorAll('.component-triggers__button');
*/

// Add javascript for the tabs

function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
 
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
 
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
 
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
 }

 function myFunction() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
 }

