document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".product-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-product");
            
            window.location.href = `product-detail.html?product=${productId}`;
        });
    });
});
  document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if (loggedInUser && loggedInUser.pic) {
    const navProfileImg = document.getElementById("navProfileImg");
    if (navProfileImg) {
      navProfileImg.src = loggedInUser.pic;
    }
  }
});
