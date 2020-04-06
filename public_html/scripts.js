//Nome
function validarnome(){
    var txt = document.getElementById("txtNome");
    var nome = txt.value;
    if(nome.length<3){
        alert("O campo Nome precisa conter no mímimo 3 caracteres.");
        return false;
    }else{
        return true;
    }
}
//Preço
function validarpreco(){
    var valor = document.getElementById("txtPreco");
    var preco = valor.value;
    if(preco<0 || preco==0 || preco==""){
        alert("Preço inválido, o valor precisa ser maior que 0.");
        return false;
    }else{
        return true;
    }
}

//Quantidade
function validarqtd(){
    var txtQtd = document.getElementById("txtQtd");
    var qtd = txtQtd.value;
    if(qtd<0 || qtd==""){
        alert("Quantidade inválida.");
        return false;
    }else{
        return true;
    }
}

//Data de Validade

    
