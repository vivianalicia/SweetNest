document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    const productData = {
         "pandan-bloom-basket": {
            name: "Pandan Bloom Basket",
            price: "Rp. 300.000",
            description: "Pandan Bloom Basket adalah bolu pandan lembut dengan aroma harum dan taburan keju premium yang meleleh, menghadirkan rasa hangat dan nostalgia dalam setiap potongnya.",
            images: [
        "../assets/ProductAssets/Hampers 1.png",
        "../assets/ProductAssets/Hampers 1.png",
        "../assets/ProductAssets/Hampers 1.png"
    ]
            
        },
        "basque-cheese-galore": {
            name: "Basque Cheesecake",
            price: "Rp. 350.000",
            description: "Basque Cheesecake Galore adalah cheesecake karamel lembut dan creamy dengan rasa keju mendalam, simbol kemewahan dan ketulusan dalam setiap gigitan.",
            images: [
        "../assets/ProductAssets/Hampers 2.png",
        "../assets/ProductAssets/Hampers 2.png",
        "../assets/ProductAssets/Hampers 2.png"
    ]
        },
        "cookie-stack-suitcase": {
            name: "Cookie Stack Suitcase",
            price: "Rp. 350.000",
            description: "Cookie Stack Suitcase adalah tumpukan kue kering dalam koper mini eksklusif yang manis dan berkesan, sempurna untuk dibagi atau dinikmati sendiri.",
            images: [
        "../assets/ProductAssets/Hampers 4.png",
        "../assets/ProductAssets/Hampers 4.png",
        "../assets/ProductAssets/Hampers 4.png"
    ]
        },
        "fusion-treat": {
            name: "Fusion Treats",
            price: "Rp. 400.000",
            description: "Fusion Treat adalah perpaduan cheesecake klasik dan cokelat yang lembut, manis, dan harmonis—cerminan cinta dalam perbedaan.",
            images: [
        "../assets/ProductAssets/Hampers 3.png",
        "../assets/ProductAssets/Hampers 3.png",
        "../assets/ProductAssets/Hampers 3.png"
    ]
        },

        "sweet-heart-box": {
            name: "Sweet Heart Box",
            price: "Rp. 400.000",
            description: "Sweet Heart Box adalah bolu pandan lembut dalam kotak elegan yang menyampaikan kasih sayang lewat kesederhanaan yang bermakna.",
            images: [
        "../assets/ProductAssets/Hampers 5.png",
        "../assets/ProductAssets/Hampers 5.png",
        "../assets/ProductAssets/Hampers 5.png"
    ]
        },

        "nest-layers": {
            name: "Nest Layers",
            price: "Rp. 400.000",
            description: "Nest Layers adalah spikoe klasik beraroma rempah hangat dengan lapisan lembut yang menyimpan nostalgia dan kehangatan.",
            images: [
        "../assets/ProductAssets/Hampers 6.png",
        "../assets/ProductAssets/Hampers 6.png",
        "../assets/ProductAssets/Hampers 6.png"
    ]
        },

        "serenade-basket": {
            name: "Serenade Basket",
            price: "Rp. 470.000",
            description: "Serenade Basket adalah hampers nastar lembut dan engagement package romantis, sempurna untuk melamar atau merayakan cinta istimewa.",
            images: [
        "../assets/ProductAssets/Hampers 7.jpg",
        "../assets/ProductAssets/Hampers 7.jpg",
        "../assets/ProductAssets/Hampers 7.jpg"
    ]
        },

        "golden-package": {
            name: "Golden Package",
            price: "Rp. 530.000",
            description: "Golden Package adalah kombinasi nastar dan kastengel premium dalam kemasan keemasan mewah dengan engagement package sebagai simbol cinta yang tulus dan abadi.",
            images: [
        "../assets/ProductAssets/Hampers 8.jpg",
        "../assets/ProductAssets/Hampers 8.jpg",
        "../assets/ProductAssets/Hampers 8.jpg"
    ]
        },

        "cookie-goodie": {
            name: "Cookie Goodie",
            price: "Rp. 300.000",
            description: "Cookie Goodie adalah tiga pilihan kue favorit SweetNest dalam satu paket manis yang cocok untuk hadiah, buah tangan, atau kejutan penuh arti.",
            images: [
        "../assets/ProductAssets/Hampers 9.jpg",
        "../assets/ProductAssets/Hampers 9.jpg",
        "../assets/ProductAssets/Hampers 9.jpg"
    ]
        },

        
        
    };

    const product = productData[productId];

    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-image").src = product.images[0];
        document.getElementById("product-image").alt = product.name;

        const productImagesContainer = document.querySelector(".product-images-container");
        product.images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = product.name;
        img.className = "product-content-image";
    });

    } else {
        document.getElementById("product-name").textContent = "Produk tidak ditemukan.";
    }
});
function goToProfile(event) {
  event.preventDefault();
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if(loggedInUser){
    window.location.href="../html/profile.html"
  }
  else{
     window.location.href="../html/registration.html"
  }
}