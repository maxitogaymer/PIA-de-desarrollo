function toggleCostos() {
  const menuCostos = document.getElementById("menu-costos");
  const button = document.getElementById("toggle-costos");

  if (menuCostos.style.display === "none") {
    menuCostos.style.display = "block";
    button.textContent = "Ocultar Costos";
  } else {
    menuCostos.style.display = "none";
    button.textContent = "Mostrar Costos";
  }
}
