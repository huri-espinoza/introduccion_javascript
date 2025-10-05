const precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let total = document.querySelector(".valor-total");
total.innerHTML= 0


function sumar() {
    let cantidad = document.querySelector(`.cantidad`);
    let aumentar = Number (cantidad.innerHTML);
    aumentar = aumentar + 1;
    cantidad.innerHTML= aumentar;

    let total = document.querySelector(`.valor-total`);
    total.innerHTML = aumentar * precio;
}


function restar() {
    let cantidad = document.querySelector(`.cantidad`);
    let disminuir = Number (cantidad.innerHTML);
    disminuir = disminuir - 1;
    cantidad.innerHTML= disminuir;

    let total = document.querySelector(`.valor-total`);
    total.innerHTML= disminuir * precio;
}