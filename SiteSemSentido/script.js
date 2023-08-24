var txtA = document.getElementById('txtA')
var txtB = document.getElementById('txtB')
var txtC = document.getElementById('txtC')
var res = document.getElementById('res')

function verficar(){
    res.innerHTML = ''
    var delta = txtB.value**2 - 4 * txtA.value * txtC.value
    var x1 = (txtB.value + Math.sqrt(delta)) / (2*txtA.value)
    res.innerHTML += `<p>Temos o valor de A é ${txtA.value}</p>`
    res.innerHTML += `<p>Temos o valor de B é ${txtB.value}</p>`
    res.innerHTML += `<p>Temos o valor de C é ${txtC.value}</p>`

}