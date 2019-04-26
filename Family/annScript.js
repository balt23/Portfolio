const annImgArray = ["annImg/1.jpg", "annImg/2.jpg"];


let img = document.getElementById('annBgImg');

let i = 1;

function annAutoChange() {
    img.src = annImgArray [i];
    i++;
    if (i == annImgArray.length) {
        i=[0];
    }
}




setInterval(annAutoChange, 3000);