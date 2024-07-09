// CAPTURANDO O FORMULARIO
const form = document.getElementById('formu');

// ADICIONANDO O EVENTO
form.addEventListener('submit', function(event){
    event.preventDefault(); // EVITAR A PAGINA RECARREGAR AO RECEBER AS INFORMAÇÕES DIGITADAS

    // CAPTURANDO OS VALORES DO PESO E DA ALTURA
     const peso = document.getElementById('weight').value;
     const altura = document.getElementById('height').value;
    // CAPTURANDO OS VALORES DO PESO E DA ALTURA

    //CALCULO DO IMC
     const imc = (peso / (altura * altura)).toFixed(2);
     //CALCULO DO IMC

    //  CAPTURANDO O VALOR 
     const valor = document.getElementById('value');
     //  CAPTURANDO O VALOR 

    //  VARIAVEL DE EXIBIÇÃO DA DESCRIÇÃO
     let descricao = '';
    //  VARIAVEL DE EXIBIÇÃO DA DESCRIÇÃO

    // ADICIONA UMA NOVA COR PARA O ELEMENTO VALOR
     valor.classList.add('warning');

    //  CAPTURANDO O ELEMENTO EXIBIR E FAZENDO APARECER AS NOVAS INFORMAÇÕES
     document.getElementById('exibir').classList.remove('hidden');
    //  CAPTURANDO O ELEMENTO EXIBIR E FAZENDO APARECER AS NOVAS INFORMAÇÕES

    // CONDIÇÕES DO IMC
     if(imc < 18.50){
        descricao = 'Atenção! Você está abaixo do peso!'
     } else if(imc >= 18.5 && imc <= 25){
            descricao = "Boa! Você está no peso ideal!"
            valor.classList.remove('warning'); //O PESO IDEAL TROCA DE COR DO VERMELHO PARA O VERDE
            valor.classList.add('ideal');
     } else if(imc > 25 && imc <= 30){
        descricao = "Atenção! Você está com sobrepeso!"
     } else if(imc > 30 && imc <= 35){
        descricao = "Atenção! Você está com obesidade moderada!"
     } else if(imc > 35 && imc <= 40){
        descricao = "Atenção! Você está com obesidade severa!"
     } else {
        descricao = "Atenção! Você está com obesidade morbidal!"
     }
     // CONDIÇÕES DO IMC

     // TROCANDO O PONTO PELA VIRGULA NO VALOR DO IMC
     valor.textContent = imc.replace('.', ',');
    //  EXIBINDO A DESCRIÇÃO DO IMC
     document.getElementById('descricao').textContent = descricao;
})