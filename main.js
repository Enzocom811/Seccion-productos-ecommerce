/* Variables */

let usuario = ""
let visitas = 0

const $parrafo = document.getElementById ("paragraph")
const $cuentaVisitas = document.getElementById ("contador")

$parrafo.addEventListener("click", (e) => nombreUsuario(e))

function nombreUsuario(e) {
    let name = prompt ("Ingresá tu nombre");
    let nameId = usuario = name;
    localStorage.setItem("user", nameId);
    location.reload();
};

function getValue() {
    let value = localStorage.getItem("user");
    $parrafo.innerHTML = `Bienvenid@ ${value || null || ""}`
};

getValue()

let contador =+ localStorage.getItem("visitas") || 0;

function visitCounter() {
    contador = contador + 1;
    localStorage.setItem("visitas", contador)
    $cuentaVisitas.innerHTML = `Visitas: ${contador}`
}

visitCounter()