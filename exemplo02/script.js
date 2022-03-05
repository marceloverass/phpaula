function somar() {
    var tn1 = window.document.querySelector('input#txtn1')
    var tn2 =  window.document.querySelector('input#txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `${n1} + ${n2} = ${s}`
}

function subtrair() {
    var tn1 = window.document.querySelector('input#txtn1')
    var tn2 =  window.document.querySelector('input#txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 - n2
    res.innerHTML = `${n1} - ${n2} = ${s}`
}

function dividir() {
    var tn1 = window.document.querySelector('input#txtn1')
    var tn2 =  window.document.querySelector('input#txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2
    res.innerHTML = `${n1} / ${n2} = ${s}`
}

function multiplicar() {
    var tn1 = window.document.querySelector('input#txtn1')
    var tn2 =  window.document.querySelector('input#txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2
    res.innerHTML = `${n1} * ${n2} = ${s}`
}