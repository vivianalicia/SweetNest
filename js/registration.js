function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("textmail").value; // Changed to match HTML id="textmail"
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let female = document.getElementById("female");
    let male = document.getElementById("male");
    let terms = document.getElementById("terms");

    if (username == "" || username.length < 4) {
        alert("Username must be filled and more than 4 characters");
        return false;
    } else if (!email.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
        return false;
    } else if (!isAlphaNumeric(password) || password.length < 10) {
        alert("Password must be alphanumeric and more than 10 characters");
        return false;
    } else if (password != cpassword) {
        alert("Password and confirm password has to match");
        return false;
    } else if (!female.checked && !male.checked) {
        alert("Please select a gender");
        return false;
    } else if (!terms.checked) {
        alert("Please agree to the term and condition");
        return false;
    } else {
        alert("Form successfully submitted");
        
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