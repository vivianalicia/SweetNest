document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function () {
        const usernameInput = document.getElementById("username").value.trim();
        const passwordInput = document.getElementById("password").value;
        const termsChecked = document.getElementById("terms").checked;

        if (!termsChecked) {
            alert("Silakan setujui syarat dan ketentuan!");
            return;
        }

        const storedData = JSON.parse(localStorage.getItem("registeredUser"));

        if (!storedData) {
            alert("Tidak ditemukan pengguna terdaftar. Silakan daftar terlebih dahulu.");
            return;
        }

        if (usernameInput === storedData.username && passwordInput === storedData.password) {
            alert("Login berhasil!");
            window.location.href = "../index.html";  // sesuaikan halaman setelah login
        } else {
            alert("Username atau kata sandi salah.");
        }

        console.log("Stored data:", storedData);
    });
});
