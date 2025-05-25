document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");


    loginButton.addEventListener("click", function () {
        const usernameInput = document.getElementById("username").value.trim();
        const passwordInput = document.getElementById("password").value;
        const termsChecked = document.getElementById("terms").checked;
        let passwordError = document.getElementById("passwordError");
        let usernameError = document.getElementById("usernameError");
        let checkboxError = document.getElementById("checkboxError");
        const errorDivs = document.querySelectorAll(".error-message");
        errorDivs.forEach(div => div.style.display = "none");


        if (!termsChecked) {
            checkboxError.style.display = "block";
            return;
        }

        const storedData = JSON.parse(sessionStorage.getItem("users") || "[]");
        const matchedUser = storedData.find(user => user.username === usernameInput && user.password == passwordInput);
        if (!storedData) {
            alert("Tidak ditemukan pengguna terdaftar. Silakan daftar terlebih dahulu.");
            return;
        }

        if (matchedUser) {
            //menyimpan agar bisa dipakai dihalaman feedback
            sessionStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
            window.location.href = "../index.html";  // sesuaikan halaman setelah login
        } else {
           passwordError.style.display = "block";
           usernameError.style.display = "block";
           return false;
        }

    });
});
