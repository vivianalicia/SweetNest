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

        const storedData = JSON.parse(sessionStorage.getItem("users") || "[]");
        const matchedUser = storedData.find(user => user.username === usernameInput && user.password == passwordInput);
        if (!storedData) {
            alert("Tidak ditemukan pengguna terdaftar. Silakan daftar terlebih dahulu.");
            return;
        }

        if (matchedUser) {
            alert("Login berhasil!");
            //menyimpan agar bisa dipakai dihalaman feedback
            sessionStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
            window.location.href = "../index.html";  // sesuaikan halaman setelah login
        } else {
            alert("Username atau kata sandi salah.");
        }

    });
});
