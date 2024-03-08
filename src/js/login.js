// Load the header and footer onto the page.
//  Check for a url parameter called redirect (remember the utility function: getParam?)
//  Add an event listener to our login form's button, when the login button is clicked do the following:
//  Get the username and password out of the form fields.
//  Pass those to the login function along with the redirect information we gathered above.

import { renderHeaderFooter } from "./utils.mjs";
import { getParam } from "./utils.mjs";
import { login } from "./auth.mjs";

const redirect = getParam("redirect");


document.querySelector("#loginButton").addEventListener("click", (e) => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    login({ username, password }, redirect);
  });

  renderHeaderFooter();