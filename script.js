

const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function clique_botao(){
    formulario.style.left = "40%";
    formulario.style.transform = "translateY(-5%)";
    mascara.style.visibility = "visible";
}

function esconderform(){
    formulario.style.left = "-370px";
    formulario.style.transform = "translateY()";
    mascara.style.visibility = "hidden";
}