// Function to generate a random string of specified length
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  // Function to change the displayed random string
  function changeString() {
    const randomStringElement = document.getElementById('randomString');
    const newRandomString = generateRandomString(6); // Generates a string of length 6
    randomStringElement.textContent = newRandomString;
  }
  
  // Add event listener to button
  document.getElementById('generateStringBtn').addEventListener('click', changeString);
  