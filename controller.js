function  Entrar(){
    window.location.href = "index.html";
}
//cria lista de usuario dentro de um array
     var dadosLista = [];
     function salvarUser(){
        let nomeUser = document.getElementById("nomeUser").value;
        if(nomeUser){
            dadosLista.push(nomeUser);
            criaLista();
            document.getElementById("nomeUser").value = '';
        }
     }
    //  FUNÇAO PARA CRIACAO DE LISTA NA TABELA
    function criaLista(){
        let tabela = document.getElementById('tabela').innerHTML = " <tr><th>itens</th><th></th></tr>";
        // LAÇO DE REPETICAO PARA COLOCAR NOMES NA TABELA
        for(let i=0;i <=(dadosLista.length-1);i++){
            tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
            document.getElementById("tabela").innerHTML = tabela;
        }
    }
    // funcao para editar nome
    function editar(i){
        document.getElementById("nomeUser").value = dadosLista[(i - 1)];
        dadosLista.splice(dadosLista [(i - 1)], 1);
    }
    // funcao para excluir nome
    function excluir(i){
        dadosLista.splice((i - 1), 1);
        document.getElementById('tabela').deleteRow(i);
    }
    
    
    