let senha = prompt("Crie uma senha:");           //prompt pede a senha
let confirmar = prompt("Digite a senha novamente:");      //let vai guarda o valor

if (senha === confirmar) {   // if compara
    alert("Acesso permitido.");    // alert mostra a resposta
} else {
    alert("Senha incorreta.");
}