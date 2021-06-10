var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// 1. Start the server in the folder JWDP5 (npm start server)
// 2. Use fetch to get informations from the API (here : cameras)
fetch("https://ab-p5-api.herokuapp.com/api/cameras")
.then(res => res.json()) // not useful for our app
.then(data => { 
    console.log(data); // data returns an array with all the informations about cameras
    let l = data.length; // get numbers of element in the array for the for loop

    for(let i = 0; i < l; i++){

        // All console.log are here to test if I request them well
        console.log(data[i])
        console.log(data[i]['id']);
        console.log(data[i]['name']);
        console.log(data[i]['description']);
        console.log(data[i]['price']);
        console.log(data[i]['imageUrl']);

        // creation of a div with a class col
        let col =  document.createElement('div');
        col.classList.add("col");

        // creation of a div with classes card an shadow-sm
        let card = document.createElement('div');
        card.classList.add("card", "shadow-sm");

        // creation of a img tag where I fill the src attribute with the url given via the array "data". I also add a width 100% and a height 100%.
        let img = document.createElement('img');
        img.src = data[i]['imageUrl'];
        img.css = 'width:100%';
        img.css = 'height:100%';

        // creation of a div tag with a class card-body
        let cardBody = document.createElement('div');
        cardBody.classList.add("card-body");

        // creation of a h3 tag that contain the name of the camera given by the array "data"
        let cardHeader = document.createElement('h3');
        cardHeader.innerText = data[i]['name'];

        // creation of a p tag that contain the description of the camera given by the array "data". Also added a class "card-text"
        let cardText = document.createElement('p');
        cardText.classList.add("card-text");
        cardText.innerText = data[i]['description'];

        // creation of a div tag with classes d-flex, justify-content-between and align-items-center
        let ctaBlock = document.createElement('div');
        ctaBlock.classList.add("d-flex", "justify-content-between", "align-items-center");

        // creation of a div tag with the class btn-group
        let btnGroup = document.createElement('div');
        btnGroup.classList.add("btn-group");

        // creation of a btn with the class btn, btn-sm and btn-outline-secondary. I also added the text "Buy" inside.
        let btn = document.createElement('button');
        btn.classList.add("btn", "btn-sm", "btn-outline-secondary");
        btn.innerText = "View";

        // Creation of a small tag with class text-muted and with a text that contain the price of the camera given by the array "data" divided by 100 because the price was in penny 
        let price = document.createElement('small');
        price.classList.add("text-muted");
        price.innerText = '€' + data[i]['price']/100;

        /* --------------------------------------------- */

        /* Here, we will connect all the HTML elements we have created above and added them to the DOM of the index.html
        
        I recreate the same architecture that the example of a static card in the index.html who is commented
        */

        ctaBlock.appendChild(btnGroup);
        btnGroup.appendChild(btn);
        ctaBlock.appendChild(price);

        cardBody.appendChild(cardHeader);
        cardBody.appendChild(cardText);
        cardBody.appendChild(ctaBlock);

        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody)

        // get the HTML element where I want to include my card
        let container = document.getElementById("row");
        container.appendChild(col);
    }
})
.catch(
    function(error){ alert("Erreur : " + error);
});