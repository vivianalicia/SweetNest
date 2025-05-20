document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    const productData = {
         "pandan-bloom-basket": {
            name: "Pandan Bloom Basket",
            price: "Rp. 350.000",
            description: "Dibalut aroma pandan yang harum dan tekstur bolu yang lembut, setiap potong dari Pandan Bloom Basket seakan membawa pulang kenangan masa kecil. Keju premium yang meleleh di atasnya menambah kesan hangat dan mendalam—sebuah persembahan manis untuk orang tersayang yang pantas mendapatkan yang terbaik.",
            images: [
        "../assets/ProductAssets/Hampers 1.png",
        "../assets/ProductAssets/Hampers 1.png",
        "../assets/ProductAssets/Hampers 1.png"
    ]
            
        },
        "basque-cheese-galore": {
            name: "Basque Cheesecake",
            price: "Rp. 350.000",
            description: "Dengan permukaan yang karamelisasi dan lapisan dalam yang lembut serta creamy, Basque Cheesecake Galore hadir sebagai simbol ketulusan dan kemewahan. Rasa keju yang dalam berpadu dengan kelembutan teksturnya menjadikan setiap gigitan bagaikan pelukan hangat di hari-hari penuh cinta.",
            images: [
        "../assets/ProductAssets/Hampers 2.png",
        "../assets/ProductAssets/Hampers 2.png",
        "../assets/ProductAssets/Hampers 2.png"
    ]
        },
        "cookie-stack-suitcase": {
            name: "Cookie Stack Suitcase",
            price: "Rp. 350.000",
            description: "Disusun rapi dalam koper mini eksklusif, tumpukan kue kering ini tak hanya memanjakan lidah, tetapi juga hati. Cookie Stack Suitcase adalah kenangan manis yang bisa dibagikan, atau disimpan diam-diam untuk diri sendiri—karena beberapa kebahagiaan memang pantas dinikmati perlahan.",
            images: [
        "../assets/ProductAssets/Hampers 4.png",
        "../assets/ProductAssets/Hampers 4.png",
        "../assets/ProductAssets/Hampers 4.png"
    ]
        },
        "fusion-treat": {
            name: "Fusion Treats",
            price: "Rp. 350.000",
            description: "Seperti dua hati yang saling melengkapi, Fusion Treat menyatukan dua rasa yang berbeda namun harmonis: cheesecake klasik yang lembut dan cheesecake cokelat yang menggoda. Sajian ini bukan hanya sekadar manis, tapi juga metafora dari cinta yang menyatu dalam perbedaan.",
            images: [
        "../assets/ProductAssets/Hampers 3.png",
        "../assets/ProductAssets/Hampers 3.png",
        "../assets/ProductAssets/Hampers 3.png"
    ]
        },

        "sweet-heart-box": {
            name: "Sweet Heart Box",
            price: "Rp. 250.000",
            description: "Sweet Heart Box adalah wujud cinta dalam bentuk sederhana namun penuh makna. Bolu pandan lembut dalam porsi melimpah disajikan dalam kotak elegan—sempurna untuk mereka yang ingin mengungkapkan kasih sayang lewat manisnya perhatian.",
            images: [
        "../assets/ProductAssets/Hampers 5.png",
        "../assets/ProductAssets/Hampers 5.png",
        "../assets/ProductAssets/Hampers 5.png"
    ]
        },

        "nest-layers": {
            name: "Nest Layers",
            price: "Rp. 400.000",
            description: "Setiap lapisan dalam Nest Layers menyimpan cerita, seperti kenangan yang dibingkai dalam kelembutan spikoe klasik. Aroma rempah yang hangat dan tekstur yang bersatu indah menjadikannya pilihan tepat untuk berbagi rasa cinta, nostalgia, dan kehangatan.",
            images: [
        "../assets/ProductAssets/Hampers 6.png",
        "../assets/ProductAssets/Hampers 6.png",
        "../assets/ProductAssets/Hampers 6.png"
    ]
        },

        "serenade-basket": {
            name: "Serenade Basket",
            price: "Rp. 470.000",
            description: "Lebih dari sekadar hampers, Serenade Basket adalah lagu cinta dalam bentuk kue. Nastar lembut berisi nanas manis berpadu dengan engagement package yang romantis, menjadikannya pilihan tak terlupakan untuk melamar atau merayakan cinta yang mendalam.",
            images: [
        "../assets/ProductAssets/Hampers 7.jpg",
        "../assets/ProductAssets/Hampers 7.jpg",
        "../assets/ProductAssets/Hampers 7.jpg"
    ]
        },

        "golden-package": {
            name: "Golden Package",
            price: "Rp. 530.000",
            description: "Golden Package menyajikan kombinasi klasik dari nastar dan kastengel yang mewah, dibungkus dengan nuansa keemasan yang menggoda. Dilengkapi dengan engagement package eksklusif, ini adalah simbol kemewahan, keseriusan, dan cinta yang ingin tumbuh selamanya.",
            images: [
        "../assets/ProductAssets/Hampers 8.jpg",
        "../assets/ProductAssets/Hampers 8.jpg",
        "../assets/ProductAssets/Hampers 8.jpg"
    ]
        },

        "cookie-goodie": {
            name: "Cookie Goodie",
            price: "Rp. 300.000",
            description: "Pilih tiga dari kue favorit SweetNest dan jadikan Cookie Goodie sebagai tanda cinta yang sederhana tapi penuh arti. Cocok untuk buah tangan, hadiah manis, atau sekadar pengingat bahwa kebahagiaan bisa datang dalam bentuk kue mungil nan lezat.",
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
        productImagesContainer.appendChild(img);
    });

    } else {
        document.getElementById("product-name").textContent = "Produk tidak ditemukan.";
    }
});
