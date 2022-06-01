function escondeAcompanhamento(){
    let acompanhamento = document.getElementById('acompanhamentoNao').value    
    if(acompanhamento='não'){
       document.getElementById('escolha').style.visibility = 'hidden'
    } else {
        document.getElementById('escolha').style.visibility = 'visible'
    }
}

function mostraAcompanhamento(){
    let acompanhamento = document.getElementById('acompanhamentoSim').value    
    if(acompanhamento='sim'){
       document.getElementById('escolha').style.visibility = 'visible'
    } else {
        document.getElementById('escolha').style.visibility = 'hidden'
    }
}