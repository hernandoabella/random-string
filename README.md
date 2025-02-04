# Random String Generator

A simple web app that generates a random alphanumeric string with each button click. 

## This project is built using
- HTML
- CSS
- JavaScript

## Explanation:
- **HTML:** The structure includes a div that displays the random string and a button that, when clicked, triggers the JavaScript function to generate a new string. 
- **CSS:** Styles the container and box, with the button changing color on hover. 
- **JavaScript:** Generates a random alphanumeric string of 6 characters and updates the displayed string when the button is clicked. 
You can save these files (index.html, style.css, script.js) in a local folder and open index.html in your browser to see the app in action.

## Screenshot 📷
![Screenshot 2024-10-21 193944](https://github.com/user-attachments/assets/c0fd5fa4-32d1-4462-906b-82c9e46e7c51)


## Features
- Generates a random alphanumeric string of 6 characters
- Simple, responsive design
- Clean user interface 
- Hover effect on the button for interactivity

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/hernandoabella/random-string.git
    ```

2. Navigate to the project folder:
    ```bash
    cd random-string
    ```

3. Open the `index.html` file in your browser to view the app.

## Usage
- Click the **"Random String"** button to generate a new 6-character string.
- The randomly generated string will appear in the display box.

## Customization
- You can change the length of the random string by modifying the `generateRandomString()` function in the `script.js` file.

```javascript
const generateRandomString = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
