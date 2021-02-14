var myImage = document.querySelector('img');

myImage.onclick = function(){
    let Src = myImage.getAttribute('src');
    if (Src === 'img/cat.jpg'){
        myImage.setAttribute('src','img/boat.jpg');
    }
    else{
        myImage.setAttribute('src','img/cat.jpg');
    }

}
