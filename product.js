let url = window.location.href;
let arr = url.split('?product_id=');
let id = arr[arr.length-1];

// https://ab-p5-api.herokuapp.com/api/cameras/:id
fetch("https://ab-p5-api.herokuapp.com/api/camera/"+id)
.then(res => res.json())
.then(data => {
    let productId = document.getElementById('product-id');
    productId.textContent = data._id

    let productImg = document.getElementById('product-img');
    productImg.src = data.imageUrl

    let productTitle = document.getElementById('product-title');
    productTitle.textContent = data.name;

    let productPrice = document.getElementById('product-price');
    productPrice.textContent = data.price/1000 + "€";

    let productDescription = document.getElementById('product-description');
    productDescription.textContent = data.description;
}) 