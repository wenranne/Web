// Get a reference to the button element
const button = document.getElementById('myButton');

// Define a function to be called when the button is clicked
function handleClick() {
  alert('Button clicked!');
  console.log('Button clicked!');
}

// Add an event listener to the button element
button.addEventListener('click', handleClick);

