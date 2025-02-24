// 1. Get DOM elements
const colorCode = document.getElementById('colorCode');

// 2. Function to generate a random color and apply a random color
function generateColor() {
  // 3. Generate a random hex color
  // math.random generate random number (0 inclusive to 1 exclusive)
  // multiply by that number which is 0xFFFFFFF in hex the max RGB value
  // to get number from 0 to 16,777,215
  // max floor rounds down to the nearest integer (12.7 to 12)
  // to string converts it to a hexadecimal string eg 255 -> 'ff'
  // example if math.random is 0.5 then 0.5 * 16777215 = 8388577.7 then math.floor makes it 8388577 and to string
  // makes it '7f7f81'
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
  // 4. Ensure the hex code is 6 digits by padding with zeros if needed
  // example 'ff becomes '000ff'
  // prepends # to make a valid hex color example '7f7f81 becomes #7f7f81
  const hexColor = '#' + randomColor.padStart(6, '0');
  
  // 5. Apply the color to the background
  // document.body tagets the body element
  // .style.background sets its background to our hex color
  // the browser interprets #7f7f81 as a shade of gray
  document.body.style.backgroundColor = hexColor;
  
  // 6. Update the displayed color code
  // updates the <div> to the currect hex code 
  colorCode.textContent = hexColor;
}

// 7. Generate a color on page load
// calls the function immediately when the page loads so its not justa blank at first.
generateColor();