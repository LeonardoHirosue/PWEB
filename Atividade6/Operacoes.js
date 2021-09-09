var numero1, numero2;

numero1 = parseFloat(prompt('Digite o primeiro número:'));
numero2 = parseFloat(prompt('Digite o segundo número:'));

soma = numero1 + numero2;
subtracao = numero1 - numero2;
produto = numero1 * numero2;
divisao = numero1 / numero2;
resto = numero1 % numero2;

alert('A soma de ' + numero1 + ' com ' + numero2 + ' é igual a ' + soma.toFixed(2) + '\n' + 
      'A subtração de ' + numero1 + ' com ' + numero2 + ' é igual a ' + subtracao.toFixed(2) + '\n' +  
      'O produto de ' + numero1 + ' com ' + numero2 + ' é igual a ' + produto.toFixed(2) + '\n' + 
      'A divisão de ' + numero1 + ' com ' + numero2 + ' é igual a ' + divisao.toFixed(2) + '\n' + 
      'O resto da divisão de ' + numero1 + ' com ' + numero2 + ' é igual a ' + resto.toFixed(2)
);
