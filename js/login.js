document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function () {
        const usernameInput = document.getElementById("username").value.trim();
        const passwordInput = document.getElementById("password").value;
        const termsChecked = document.getElementById("terms").checked;

        if (!termsChecked) {
            alert("Please accept the terms and conditions!");
            return;
        }

        const storedData = JSON.parse(localStorage.getItem("registeredUser"));

        if (!storedData) {
            alert("No registered user found. Please register first.");
            return;
        }

        if (usernameInput === storedData.username && passwordInput === storedData.password) {
            alert("Login successful!");
            window.location.href = "../index.html";  // sesuaikan halaman setelah login
        } else {
            alert("Incorrect username or password.");
        }

        console.log("Stored data:", storedData);
    });
});
