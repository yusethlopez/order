const perimetroDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * 4;
const areaDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * ladoDelCuadrado;

var calcularAreaCuadrado = () => {

    const ladoDelCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = areaDelCuadrado(ladoDelCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}
var Pi =Math.PI;
const perimetroDelCirculo =(Radio)=> 2 * Pi *Radio;
const areaDelCirculo =(Radio) => Pi*Radio^2;

var CalcularAreaCirculo = () =>{
    const Radio = document.querySelector("#Radio").value;
    const resultado = areaDelCirculo(Radio)
    document.querySelector("#resultado").innerHTML = resultado
}