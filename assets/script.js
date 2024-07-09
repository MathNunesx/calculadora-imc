const form = document.getElementById('formu');

form.addEventListener('submit', function(event){
    event.preventDefault();

     const peso = document.getElementById('weight').value;
     const altura = document.getElementById('height').value;

     const imc = (peso / (altura * altura)).toFixed(2);

     const valor = document.getElementById('value');
     let descricao = '';

     valor.classList.add('warning');

     document.getElementById('exibir').classList.remove('hidden');

     if(imc < 18.50){
        descricao = 'Atenção! Você está abaixo do peso!'
     } else if(imc >= 18.5 && imc <= 25){
            descricao = "Boa! Você está no peso ideal!"
            valor.classList.remove('warning');
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

     valor.textContent = imc.replace('.', ',');
     document.getElementById('descricao').textContent = descricao;
})