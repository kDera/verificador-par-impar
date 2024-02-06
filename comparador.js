
function parImpar(){
    var resultAtual = parseInt(document.getElementById("resultAtual").value);

    if(resultAtual % 2 === 0){
        document.getElementById("resultado").innerText = "o numero "+ resultAtual+"é PAR";
    }
    else{
        document.getElementById("resultado").innerText = "o numero é "+ resultAtual+" IMPAR";
    }

}

