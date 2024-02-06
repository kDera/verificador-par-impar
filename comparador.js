const resultPadrao = 0;
let qqq = resultPadrao ;

function parImpar(){
    qqq = parseInt(document.getElementById("numero").value);

    if(qqq % 2 == 0){
        document.getElementById("resultado").innerText = "o numero é PAR"
    }
    else{
        document.getElementById("resultado").innerText = "o numero é IMPAR"
    }

}
