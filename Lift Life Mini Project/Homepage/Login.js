var loginForm = document.getElementById("login");
var signupForm = document.getElementById("signup");
var btn = document.getElementById("btn");

function login() {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    btn.style.left = "0";  /* Move to the start for Login */

    // After a successful login, redirect to the home page
    window.location.href = "Homepage2.html"
}


function signup() 
{
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    btn.style.left = "50%";  /* Move to the end for Signup */
}