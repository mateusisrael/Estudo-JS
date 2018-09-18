var numero = 0;        
function botaoClick() {
    if (numero==5){
        document.getElementById("texto2").innerHTML = "PARABÉNS!!!<br>Você alcançou o nível 5"; 
    }else{
        document.getElementById("texto1").innerHTML = "====== " + (numero+=1) + " ======";
    }
}
