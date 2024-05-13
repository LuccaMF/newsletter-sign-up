# Frontend Mentor - Newsletter sign-up form with success message solution

![Desktop preview for the Newsletter sign-up form with success message coding challenge](/assets/images/preview/desktop-preview.png)
![Mobile preview for the Newsletter sign-up form with success message coding challenge](/assets/images/preview/mobile-preview.png)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

*This is just a challenge, the E-mails placed on the website will not be used or sent to any database.*

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [Newsletter Sign Up](https://newsletter-sign-up-seven-beta.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Animations
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- Responsive Web Design

### What I learned

One of the things I learned was how to validate the email using JavaScript, when it is not validated, the input field appears in red, along with the span: “Valid email required”, and only when validated, the user will be allowed to go to next page by clicking on the "Subscribe" button.

```html
<form id="form">
  <section class="spanSection">
    <label for="email">Email adress</label>
    <span class="span-required">Valid email required</span>
  </section>
  <input type="email" id="email" placeholder="email@company.com" class="input required" oninput="emailValidate()"/>
  <button type="click" id="subscribe">Subscribe to monthly newsletter</button>
</form>
```
```js
button.addEventListener('click', (event) => {
    event.preventDefault();
    if(!emailValidate(campoInput.value)) {
        changePage();
    }
});
function emailValidate(){
    if(emailRegex.test(campoInput[0].value)){
        removeError(0);
    }
    else
    {
        setError(0);
    }
}
```

And also the screen switching animation made by JavaScript:
```` js
function changePage() {
    const signUp = document.querySelector(".sign-up");
    signUp.style.transform = 'translateX(-200%)';
    const sucess = document.querySelector(".sucess");
    sucess.style.transform = 'translateX(0%)';
    sucess.style.display = 'block';
    sucess.style.position = 'absolute';
    imgSucess.style.position = 'static';
    imgSucess.style.objectPosition = '0';
}
````

### Useful resources

- [E-mail Validation](https://www.youtube.com/watch?v=YcTkoIAi0Bg) - This helped me for the E-mail validation logic on JavaScript.
