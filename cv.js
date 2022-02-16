var boton = document.getElementById('mybtn')

boton.addEventListener('click', showMessage);
function showMessage(){
    alert('Bachillerato: Promoción 2016/2017. Nota media: 9')
}

var botona = document.getElementById('mybtn2')

botona.addEventListener('click', showMessage2);
function showMessage2(){
    alert('Universidad: Promoción 19/20. Nota media: 7.21')
}

var botonb = document.getElementById('mybtn3')

botonb.addEventListener('click', showMessage3);
function showMessage3(){
    var valor = prompt('Cuanto estás dispuesto/a a ofrecerme como salario mensual')
    if (valor <1000)
    alert('no seas rata :((')
    else if (valor >=1000)
    alert('la oferta de ' + valor*2 + ' suena bien, gracias. Este boton ha autogenerado un email con tu oferta')
    
}

