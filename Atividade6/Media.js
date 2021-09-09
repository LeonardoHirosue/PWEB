var nomeAluno, nota1, nota2, nota3;

nomeAluno = prompt("Digite o nome do Aluno:");
nota1 = parseFloat(prompt("Digite a Nota 1:"));
nota2 = parseFloat(prompt("Digite a Nota 2:"));
nota3 = parseFloat(prompt("Digite a Nota 3:"));


media = (nota1 + nota2 + nota3)/3;

alert("A Média das três notas do " + nomeAluno + " é " + media.toFixed(2));
    
