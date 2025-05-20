document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".product-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-product");
            
            window.location.href = `product-detail.html?product=${productId}`;
        });
    });
});
