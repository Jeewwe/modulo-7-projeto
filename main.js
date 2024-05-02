const form = document.getElementById('ABcampos');

form.addEventListener('submit',function(e){
    e.preventDefault();   
    const campoAinput = document.getElementById('campo-a');
    const campoBinput = document.getElementById('campo-b');

    const campoA = parseFloat(campoAinput.value);
    const campoB = parseFloat(campoBinput.value);

    const mensagemFalso = `Tente novamente`;
    const mensagemVerdade = `Esta correto, o número ${campoB} é maior que o número ${campoA}`;
    
    if(campoA >= campoB){
        const containerFalso = document.querySelector('.mensagem-falso');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.mensagem-verdade').style.display = 'none';
    }
    else{     
        const containerVerdade = document.querySelector('.mensagem-verdade');
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block';
        document.querySelector('.mensagem-falso').style.display = 'none';
    }
});