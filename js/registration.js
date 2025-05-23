function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("textmail").value; // Changed to match HTML id="textmail"
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let female = document.getElementById("female");
    let male = document.getElementById("male");
    let terms = document.getElementById("terms");
    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let cPasswrodError = document.getElementById("cPasswrodError");
    let genderError = document.getElementById("genderError");
    let checkboxError = document.getElementById("checkboxError");
    const errorDivs = document.querySelectorAll(".error-message");
    errorDivs.forEach(div => div.style.display = "none");
    if (username == "" || username.length < 4) {
        usernameError.style.display = "block";
        return false;
    } else if (!email.endsWith("@gmail.com")) {
        emailError.style.display = "block";
        return false;
    } else if (!isAlphaNumeric(password) || password.length < 10) {
        passwordError.style.display = "block";
        return false;
    } else if (password != cpassword) {
        cPasswrodError.style.display = "block";
        return false;
    } else if (!female.checked && !male.checked) {
        genderError.style.display = "block";
        return false;
    } else if (!terms.checked) {
        checkboxError.style.display = "block";
        return false;
    } else {
        let gender = male.checked ? "Male" : "Female";

        let userData = {
            username: username,
            email: email,
            password: password,
            gender: gender
        };
        localStorage.setItem("registeredUser", JSON.stringify(userData));
        
        let registArray = [username, email, password, gender];
        console.log(registArray);
        
        window.location.href = "/html/login.html";
        return false; 
    }
}

function isAlphaNumeric(str) {
    let isAlpha = false;
    let isNumeric = false;
    
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            isAlpha = true;
        } else {
            isNumeric = true;
        }
        
        if (isAlpha && isNumeric) {
            return true;
        }
    }
    return false;
}