// Select elements
const colorInput = document.getElementById('color-input');
const textInput = document.getElementById('text-input');
const bgBtn = document.getElementById('bg-btn');
const textBtn = document.getElementById('text-btn');
const outputBox = document.getElementById('output-box');

// Function to validate color
function isValidColor(color) {
    const test = document.createElement('div');
    test.style.color = color;
    return test.style.color !== '';
}

// Change background color
bgBtn.addEventListener('click', () => {
    const color = colorInput.value.trim();
    if (isValidColor(color)) {
        outputBox.style.backgroundColor = color;
    } else {
        alert('Invalid color name!');
    }
});

// Update text content
textBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text === '') {
        alert('Please enter some text!');
    } else {
        outputBox.textContent = text;
    }
});