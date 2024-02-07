

function parImpar(){
    var number = parseFloat(document.getElementById("resultAtual").value);
    const resultado = document.getElementById("resultado")

    //se onumero for quebrado, mensgem de inválio
   //console.log()
    if (Number.isInteger(number)) {
        if(number% 2=== 0){
            document.getElementById("resultado").innerText = "o numero "+ number+" é PAR";
        }
        else{
            document.getElementById("resultado").innerText = "o numero "+ number+" é impar";
        }
    } else {
        console.log("INVALIDO O valor inserido é um número decimal.");
        document.getElementById("resultado").innerText = "o numero "+ number+" é inválido devido ter casa decimal";
    }
     console.log(Number.isInteger(number))
    
}