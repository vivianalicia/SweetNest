function validateForm() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let cpassword = document.getElementById("cpassword");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let gender = male.checked ? "Male" : (female.checked ? "Female" : "");
    let terms = document.getElementById("terms");

    if (username.value === "" || username.value.length < 4) {
        alert("Username must be filled and at least 4 characters!");
        return false;
    } else if (!email.value.endsWith("@gmail.com") && !email.value.endsWith("@yahoo.com")) {
        alert("Email must end with @gmail.com or @yahoo.com!");
        return false;
    } else if (!isAlphaNumeric(password.value)) {
        alert("Password must be alphanumeric!");
        return false;
    } else if (password.value.length < 15) {
        alert("Password must be at least 15 characters!");
        return false;
    } else if (cpassword.value === "") {
        alert("Please confirm your password!");
        return false;
    } else if (password.value !== cpassword.value) {
        alert("Passwords do not match!");
        return false;
    } else if (!male.checked && !female.checked) {
        alert("Please select a gender!");
        return false;
    } else if (!terms.checked) {
        alert("You must accept the terms and conditions!");
        return false;
    } else {
        alert("Form successfully submitted!");

        let userData = {
            email: email.value,
            password: password.value,
            gender: gender
        };
        localStorage.setItem("registeredUser", JSON.stringify(userData));

        let registArray = [username.value, email.value, password.value, gender];

        console.log(registArray)

        window.location.href = "../html/Login.html";
    }
}

function isAlphaNumeric(str) {
    let hasAlpha = false;
    let hasNumeric = false;

    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            hasAlpha = true;
        } else {
            hasNumeric = true;
        }
        if (hasAlpha && hasNumeric) {
            return true;
        }
    }
    return false;
}
