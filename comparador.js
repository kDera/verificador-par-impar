
function parImpar(){
    var resultAtual = parseInt(document.getElementById("resultAtual").value);
   

    //se onumero for quebrado, mensgem de inválio
    var resto ;
    
    if(resultAtual % 2 != 0){
        resto = (resultAtual % 2)/100;
        document.getElementById("resultado").innerText = "o numero "+ resultAtual +" é INVALIDO por ter resto "+resto;
    }
    else{
        if(resultAtual % 2 === 0){
            document.getElementById("resultado").innerText = "o numero "+ resultAtual+" é PAR";
        }else
        document.getElementById("resultado").innerText = "o numero é "+ resultAtual+" IMPAR";
    }
 
}

