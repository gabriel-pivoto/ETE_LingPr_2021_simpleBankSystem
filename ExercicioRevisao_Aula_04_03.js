var clientes = [
    [nome = "Bruno",
     código = "123", 
     senha = "123", 
     saldo = 100], 
    [nome = "Joaozinho",
     código = "456", 
     senha = "456", 
     saldo = 10],
]
/**
 * A classe procura cliente no array clientes.
 * @constructor
 * @param {string} cliente - informalções sobre o cliente
 */
/**
 * @function procura_cliente
 */
/**
 * 
 */

var codigo = window.prompt("Digite o seu código")
var senha = window.prompt("Digite sua senha")

function procura_cliente(cliente){
return cliente[1] == codigo && cliente[2] == senha
}
// console.log(cliente)

var cliente_localizado = (clientes.find(procura_cliente))

if(cliente_localizado == null){
alert("Cliente não localizado")
}

else{
console.log(cliente_localizado)
var operacao = Number(window.prompt("Qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia"))
var valor_operacao = Number(window.prompt("Qual o valor da operação?"))
  
  switch(operacao){
    case(1):
      // console.log(cliente_localizado[3])
    if(valor_operacao <= cliente_localizado[3]){
      var saldo = cliente_localizado[3]
      
      console.log("Dinheiro liberado")
      saldo = saldo - valor_operacao
      console.log("Saldo atual: "+saldo)
    }
    else{
      console.log("Valor insuficiente")
    }
      break;
      case(2):
      var conta_de_destino = window.prompt("Qual é a conta de destino?")
      var confirmacao = Number(window.prompt("1 - confirmar 2 - cancelar"))
      if(confirmacao == 1){
    function procura_cliente_dois(client){
return client[0] == conta_de_destino
}

var cliente_localizad = (clientes.find(procura_cliente_dois))

console.log(cliente_localizad)
       var saldo2 = cliente_localizad[3]
       saldo2 = saldo2 + valor_operacao
        console.log(saldo2)
        console.log("Depósito realizado com sucesso")
       

        
      }else{
        console.log("cancelado")
      }
      break;
      case(3):
      var conta_de_destino = window.prompt("Qual é a conta de destino?")
      var confirmacao = Number(window.prompt("1 - confirmar 2 - cancelar"))
      if(confirmacao == 1){
    function procura_cliente_tres(client){
return client[0] == conta_de_destino
}

var cliente_localizadoo = (clientes.find(procura_cliente_tres))

console.log(cliente_localizadoo)
console.log(cliente_localizado)
      var saldo3 = cliente_localizadoo[3]

        saldo3 = saldo3 + valor_operacao
        console.log("saldo do joaozinho "+saldo3)
        console.log("Transferencia realizada  com sucesso")
       

        
      }else{
        console.log("cancelado")
      }
      break;
      
}

      
}

