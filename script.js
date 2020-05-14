/*https://www.youtube.com/watch?v=DVb7pzsUdoE*/
window.load = slide(1); 

var bgNumber = 1; /*primeira imagem*/

function slide(n) {
    var allBgs = 4;
    document.getElementById('imageBg').style.backgroundImage = "url('images/"+n+".jpg')";  
    botoes(n, allBgs); 
    bgNumber=n;
}

function anterior() {
    if(bgNumber>1){
        bgNumber--;
        slide(bgNumber);
    }
}

function proximo() {
    if(bgNumber<4){
    bgNumber++;
    slide(bgNumber);
    }
}

function botoes(n, m) {
    document.getElementById('botoes').innerHTML = "";
    for(a=1;a<=m;a++){
        if(a==n){
            document.getElementById('botoes').innerHTML += "<li class='selecionado' onclick='slide("+a+")'></li>";
        }else{
            document.getElementById('botoes').innerHTML += "<li onclick='slide("+a+")'></li>";
        }
    }
}
