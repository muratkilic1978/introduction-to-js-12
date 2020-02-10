const randomImageArray = ["bomb.gif","frown.gif","grim.gif","smile.gif"];

const outputImageElement = document.getElementById("outputImageElement");

function printAllImages(imgArr, path){
    path = path || 'images/';
    
    let num = Math.floor( Math.random() * imgArr.length );
    let img = imgArr[ num ];
    let imgStr = '<img src="' + path + img + '" alt = "">';
    outputImageElement.innerHTML = imgStr;
}

printAllImages(randomImageArray, 'images/');