const button = document.getElementById('toggleButton');
const text = document.getElementById('text');
const container = document.getElementById('container');

// Initial state
let toggled = false;

button.addEventListener('click', () => {
    if (!toggled) {
        // Change to toggled state
        text.textContent = 'Toggled Text';
        button.textContent = 'Reset';
        container.style.backgroundColor = 'lightcoral';
    } else {
        // Revert to initial state
        text.textContent = 'Initial Text';
        button.textContent = 'Click me!';
        container.style.backgroundColor = 'lightblue';
    }
    
    toggled = !toggled; // Toggle state
});
