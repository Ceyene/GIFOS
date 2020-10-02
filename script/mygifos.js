/* -------------------- My Gifos JS ------------------ */
//Variables
myGifosArray = [];
myGifosString = localStorage.getItem("myGifos");
const my_gifos_gifos = document.getElementById("my_gifos_gifos");
const my_gifos_icon = "./images/icon-mis-gifos-sin-contenido.svg";
const trash_img = "./images/icon-trash-hover.svg";

//Show my uploaded gifos in this section
renderMyGifos();

//Render function
function renderMyGifos() {
    my_gifos_gifos.innerHTML = ""; //Avoid repeating

    //First, validate if there are any uploaded gifos
    if (myGifosString == null || myGifosString == "[]") {
        my_gifos_gifos.classList.remove("grid"); //Style of container
        noResults(my_gifos_icon, my_gifos_gifos, "¡Animate a crear tu primer GIFO!"); //Show message
    } else {
        myGifosArray = JSON.parse(myGifosString);
        console.log(myGifosArray);
        //Bring info from api about MyGifos Array
        let urlMyGifos = `https://api.giphy.com/v1/gifs?ids=${myGifosArray.toString()}&api_key=${api_key}`;

        //Use Array with information and send it to HTML
        getData(urlMyGifos, my_gifos_gifos, trash_img, erase_gifo);
    }
}

function erase(gifo) {

}
/* --------------- End of My Gifos JS ---------------- */