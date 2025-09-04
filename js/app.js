function comprar(){
    //verificar tipo e quantidade de ingresso
    let listaIngressos = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;

    //verificar quantidade de ingressos disponiveis
    let qntDisponivel = document.getElementById(`qtd-${listaIngressos}`).innerHTML;

    let txt = listaIngressos == 'pista'? 'pista':listaIngressos == 'superior'? 'cadeira superior':'cadeira inferior';
    
    //emitir alerta se qtd de ingressos não estiver indisponivel
    if(parseInt(qtd) > parseInt(qntDisponivel)){
        alert(`Quantidade de ingressos indisponível para ${txt}!`);
        return;
    }else if(qtd == '' || parseInt(qtd)<=0){
        alert('Digite a quantidade válida de ingressos que você deseja comprar!');
        return;
    }else{
        //reduzir disponibilidade
        document.getElementById(`qtd-${listaIngressos}`).innerHTML = qntDisponivel - qtd;
        alert(`Compra realizada com sucesso!\n${qtd} ingressos para ${txt}!`);
    }
}