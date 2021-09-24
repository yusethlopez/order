const perimetroDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * 4;
const areaDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * ladoDelCuadrado;

var calcularAreaCuadrado = () => {

    const ladoDelCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = areaDelCuadrado(ladoDelCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}
const perimetroDelCirculo = (radioDelCirculo) => {
    const PI = Math.PI ;
    const perimetroDelCirculo =  Math.round(radioDelCirculo*2*PI*100)/100;
    return perimetroDelCirculo
}
const areaDelCirculo = (radioDelCirculo) =>{
    const PI = Math.PI ;
    radioDelCirculo =  Math.round(Math.pow(radioDelCirculo,2) * PI*100)/100;
    return radioDelCirculo
}
var calcularAreaCirculo = () => {

    const radioDelCirculo = document.querySelector("#radio-circulo").value;
    const resultado = areaDelCirculo(radioDelCirculo)
    document.querySelector("#resultado-circulo").innerHTML = resultado
}
var calcularPerimetroCirculo= () =>{
    const radioDelCirculo = document.querySelector("#radio-circulo").value;
    const resultado = perimetroDelCirculo(radioDelCirculo)
    document.querySelector("#resultado-circulo").innerHTML = resultado