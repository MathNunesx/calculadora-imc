const form = document.getElementById('formu');

form.addEventListener('submit', function(event){
    event.preventDefault();

     const peso = document.getElementById('weight').value;
     const altura = document.getElementById('height').value;

     const imc = (peso / (altura * altura)).toFixed(2);

     const valor = document.getElementById('value');
     let descricao = '';

     document.getElementById('exibir').classList.remove('hidden');

     
})