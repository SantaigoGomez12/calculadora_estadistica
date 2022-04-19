// Media
function calcular_media (lista){
    let pre_media = lista.reduce((a,b) => Number(a) + Number(b));
    return (pre_media / lista.length).toFixed(2);
}
function calcularMedia() {
    let inputDatos = document.getElementById("inputDatos");
    let valores_string = inputDatos.value;
    let valores_array = (valores_string.split(","));
    let media = calcular_media(valores_array);
    document.getElementById("inputRespuesta").value = `Este es tu media ${media}`;
}

// Mediana
function calcular_mediana (array_ordenado) {
    let valores_ordenados = array_ordenado.sort((a,b) => Number(a) - Number(b));
    let valor_mitad = parseInt(array_ordenado.length / 2);
    if (valores_ordenados.length % 2 === 0) {
        let valor1 = parseInt(array_ordenado[valor_mitad]);
        let valor2 = parseInt(array_ordenado[valor_mitad - 1]);
        return (valor1 + valor2) / 2;
    } else {
        return valores_ordenados[valor_mitad];
    }
}
function calcularMediana() {
    let inputDatos = document.getElementById("inputDatos");
    let valores_string = inputDatos.value;
    let valores_array = (valores_string.split(","));
    let mediana = calcular_mediana(valores_array);
    document.getElementById("inputRespuesta").value = `Este es tu mediana ${mediana}`;
}


// Moda
function calcular_moda (array) {
    let objeto = {};
    array.map(element => {
        if (objeto[element]) {
            objeto[element] += 1;
        } else {
            objeto[element] = 1;
        }
    })
    console.log(objeto);
    let resultados = [];
    const objeto_array = Object.entries(objeto).sort((a,b) => a[1] - b[1]);
    let moda = objeto_array[objeto_array.length - 1]
    for (let i = 0; i < objeto_array.length; i++){
        let valor_comparacion = objeto_array[i];
        if (valor_comparacion[1] == moda[1]) {
            resultados.push(valor_comparacion[0]);
        }
    }
    return resultados
}

function calcularModa(){
    let inputDatos = document.getElementById("inputDatos");
    let valores_string = inputDatos.value;
    let valores_array = (valores_string.split(","));
    let moda = calcular_moda(valores_array);
    document.getElementById("inputRespuesta").value = `Este es tu moda ${moda}`;
}

/* Calcualdora de moda super reducida
function calcular_moda(arr){
    return arr.sort((a,b) => arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop();
}
*/
