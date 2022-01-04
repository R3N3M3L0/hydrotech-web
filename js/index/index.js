function abrirMenu() {
    document.getElementById("iconoMenu").style.display="none";
    document.getElementById("iconoMenuCerrado").style.display="inline-block";
    document.getElementById("nav").style.display="block";
    document.getElementById("nav").style.animation="backInDown";
    document.getElementById("nav").style.animationDuration="1s";
}
function cerrarMenu() {
    document.getElementById("iconoMenuCerrado").style.display="none";
    document.getElementById("iconoMenu").style.display="inline-block";
    document.getElementById("nav").style.display="none";
}