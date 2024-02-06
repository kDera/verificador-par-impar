
function parImpar(){
    var resultAtual = parseInt(document.getElementById("resultAtual").value);
   

    //se onumero for quebrado, mensgem de inválio
    if(resultAtual % 2 === 0){
        document.getElementById("resultado").innerText = "o numero "+ resultAtual+" é PAR";
    }
    else{
        document.getElementById("resultado").innerText = "o numero é "+ resultAtual+" IMPAR";
    }
 
}

