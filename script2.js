let valor = Number(prompt("Digite o valor da compra:"));  //prompt pede o valor

if (valor >= 150) {               //if verifica se é > 150 se for vai dá desconto,se não vai  mostra cashback
    let desconto = valor * 0.02;
    let total = valor - desconto;
    alert("Desconto: R$ " + desconto + "\nTotal: R$ " + total);  // \n serve para pular linha no texto.
} else {
    let cashback = valor * 0.02;
    alert("Total: R$ " + valor + "\nCashback: R$ " + cashback);
}             //O programa pede o valor da compra, se for maior que 150, dá desconto se não da cashback e no fim mostra o resultado.
