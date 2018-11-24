var text = document.getElementById('color');
var changeBtn = document.getElementById('changeColor');
var gerar = function(){

    var isLight = false;
    var hexColor = (Math.random()*0xFFFFFF<<0);
    var newColor = '#' + hexColor.toString(16);
    if(newColor.length < 7){
        gerar();
    }
    document.body.style.background = newColor;
    text.innerText = newColor;
    document.getElementById('changeColor').style.color = newColor;
}

gerar();

changeBtn.addEventListener('click', function(){
    gerar();
});