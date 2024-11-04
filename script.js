
function calcularIMC(){
  const peso = parseFloat(document.getElementById("peso").value) ;
  const altura = parseFloat( document.getElementById("altura").value);
  if (peso===0 || altura===0){
    alert("o peso ou a altura não podem ser 0")
  }else {
    let imc = (peso/(altura*altura)).toFixed(1)
  
  
  let resultado;
  
  if ( imc < 18.5){ 
    resultado=" abaixo do peso"
  }else if ( imc >=18,5 && imc < 24.9 ){
    resultado=" com peso normal"
  }else if ( imc >=25 && imc <29.9 ){
    resultado=" com sobrepeso"
  }else if (imc >=30 && imc <34.9){
    resultado=" com obesidade I"
  }else if ( imc >=35 && imc <39.9){
    resultado=" com obesidade II"
  }else if( imc >= 40){
    resultado=" com obesidade III/obesidade morbida"
  }
  
  document.getElementById("resultado").innerText = "seu imc: " + imc + "você está "+ resultado + "."


  }

  
}