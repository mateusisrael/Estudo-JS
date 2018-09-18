

function somar(){   /// Função

    var y = document.getElementById("val1").value   /// Definindo a var y pelo id "val1"
    var  x = document.getElementById("val2").value  /// Fazendo o msm com a var "x" id "val2"
    var resultado = parseInt(y) + parseInt(x)       /// A soma da var y e x com o valor inteiro passado pela função parseInt()

    document.getElementById("resultadoid").innerHTML = "Resultado = " + resultado   /// "Printando o valor da soma no paragrafo com o id "resultadoid""

    
}
