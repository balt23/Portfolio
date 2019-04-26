const famImgArray = ["famImg/1.jpg", "famImg/2.jpg", "famImg/3.jpg", "famImg/4.jpg", "famImg/5.jpg", "famImg/6.jpg", "famImg/7.jpg", "famImg/8.jpg", "famImg/9.jpg", "famImg/10.jpg"];

let img = document.getElementById('famBgImg');

let i = 1;

function famAutoChange() {
    img.src = famImgArray [i];
    i++;
    if (i == famImgArray.length) {
        i=[0];
    }
}

setInterval(famAutoChange, 1500);