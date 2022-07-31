function validaErro(array, numero){
  try {
    if(!array && !numero) throw new ReferenceError("Parâmetros inexistentes");

    if(typeof array !== 'object') throw new TypeError("O array não é um objeto");

    if(typeof numero !== 'number') throw new TypeError("O parâmetro enviado não é do tipo número");
    
    if(array.length !== numero) throw new RangeError("O tamanho do array difere do numero");

    return array;

  } catch (e) {
      if(e instanceof ReferenceError){
          console.log(e.message)
          return "Reference Error"
      }

      if(e instanceof TypeError){
          console.log(e.message)
          return "Type Error"
      }

      if(e instanceof RangeError){
          console.log(e.message)
          return "RangeError"
      }
      
    
  }



}
console.log(validaErro([1,3], 2))