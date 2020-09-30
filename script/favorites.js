/* -------------------- Favorites JS ------------------ */

//Variables
let fav_grifos = document.getElementById("fav_grifos");
const fav_icon = "./images/icon-fav-sin-contenido.svg";
const fav_act_img = "./images/icon-fav-active.svg";
let favoriteArray = [];
let favoriteString = localStorage.getItem("favoriteGifos");


//Add favorite when click fav button
function addFavorite(gifoId){

    let iconFav = document.getElementById('icon-fav-' + gifoId);
    iconFav.src = fav_act_img;

    addFav(gifoId);
}

//Add gifos to Favorite Section
function addFav(gifo) {

    //If LocalStorage is empty, array keeps empty
    if (favoriteString == null) {
        favoriteArray = [];

    } else {
        //If there is content, convert it to JSON
        favoriteArray = JSON.parse(favoriteString);
    }

    favoriteArray.push(gifo);
    //Convert to string and upload to LocalStorage
    favoriteString = JSON.stringify(favoriteArray);
    localStorage.setItem("favoriteGifos", favoriteString);
}

//Render Favorites in Section HTML
function renderFavorites() {

    fav_grifos.innerHTML = ""; //Avoid repeating

    //First, validate if there are any favorites
    if (favoriteString == null || favoriteString == "[]") {
        fav_grifos.classList.remove("grid"); //Style of container
        noResults(fav_icon, fav_grifos, "Guarda tu primer GIFO en favoritos para que se muestre aquí"); //Show message
    } else {
        favoriteArray = JSON.parse(favoriteString);
        console.log(favoriteArray);
        let urlFavorites = `https://api.giphy.com/v1/gifs?ids=${favoriteArray.toString()}&api_key=${api_key}`;
        getData(urlFavorites, fav_grifos, fav_act_img);

    }
}



/* --------------- End of Favorites JS ---------------- */

/* ----------------- Gifo Download JS ----------------- */

//Download gifo, when click download button
async function downloadGifo(gifoImg, gifoName) {
    let blob = await fetch(gifoImg).then(img => img.blob());
    invokeSaveAsDialog(blob, gifoName + ".gif");
}

/* ---------------- End of Download JS ---------------- */