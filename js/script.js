
function validaDado() {
    let input = document.getElementById('bin-input')
    let checkbox = document.getElementById('check')

    if (input.value) {
        if (isNaN(input.value)) {
            alert("Insira um numero!!!")
            input.value = ""
        }
        else {
            if (checkbox.checked) {
                if (input.value.length > 8) {
                    alert("Valor maximo excedido, desative o limite.")
                } else {
                    converterDecimal(input.value)
                }
            } else {
                converterDecimal(input.value)
            }
        }
    }
}

function converterDecimal(binario) {
    let bin = String(binario).split("").reverse().join("")
    let num, calc = 0, save = 0;

    for (let x = 0; x <= bin.length - 1; x++) {
        elevado = 2 ** x;
        save += calc
        if (x == 0) {
            num = parseInt(bin.slice(0, 1))
        } else {
            num = parseInt(bin.slice(x, x + 1))
        }
        calc = num * elevado;
    }
    let final = save + calc;
    document.getElementById('result').innerHTML = `<h2>${final}</h2>`
    return final
}