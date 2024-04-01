
function calc(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;

    if(operacao == 1){
        value = num1 + num2;
        document.getElementById("value").innerHTML = value;
    } else if(operacao == 2){
        value = num1 - num2;
        document.getElementById("value").innerHTML = value;
    } else if(operacao == 3){
        value = num1 / num2;
        document.getElementById("value").innerHTML = value;
    } else if(operacao == 4) {
        value = num1 * num2;
        document.getElementById("value").innerHTML = value;
    } else{
        document.write("Opção inválida");
    }
}