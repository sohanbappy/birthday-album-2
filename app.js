var images = ['images/Abir/1.jpg','images/Abir/2.jpg','images/Abir/3.jpg','images/Abir/4.jpg','images/Abir/5.jpg','images/Abir/6.jpg'];

var i =0;

function slideShow() {

    document.getElementById("image").src=images[i];



    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 2000);

}

window.onload = slideShow;