function calcularMedia() {
    var nomeAluno = document.getElementById("nome-aluno").value;
    var nomeDisciplina = document.getElementById("nome-disciplina").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3) / 3;

    var situacao = "";
    if (media >= 6.0) {
        situacao = "APROVADO";
    } else if (media >= 4 && media <= 5.9) {
        situacao = "RECUPERAÇÃO";
    } else if (media >= 0 && media <= 3.9) {
        situacao = "REPROVADO";
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Aluno: " + nomeAluno + "<br>";
    resultado.innerHTML += "Disciplina: " + nomeDisciplina + "<br>";
    resultado.innerHTML += "Media: " + media.toFixed(2) + "<br>";
    resultado.innerHTML += "Situacao: " + situacao;
}
