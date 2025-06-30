document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.createElement("button");
  toggleButton.style.position = "fixed";
  toggleButton.style.bottom = "20px";
  toggleButton.style.right = "20px";
  toggleButton.style.padding = "10px 15px";
  toggleButton.style.backgroundColor = "#2c3e50";
  toggleButton.style.color = "white";
  toggleButton.style.border = "none";
  toggleButton.style.borderRadius = "5px";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.zIndex = "1000";

  document.body.appendChild(toggleButton);

  // Función para activar o desactivar modo oscuro
  function aplicarModoOscuro(activo) {
    if (activo) {
      document.body.classList.add("modo-oscuro");
      toggleButton.textContent = "☀️ Modo Claro";
    } else {
      document.body.classList.remove("modo-oscuro");
      toggleButton.textContent = "🌙 Modo Oscuro";
    }
  }

  // Leer estado guardado del LocalStorage
  const modoOscuroGuardado = localStorage.getItem("modoOscuro") === "true";
  aplicarModoOscuro(modoOscuroGuardado);

  // Evento al hacer clic en el botón
  toggleButton.addEventListener("click", function() {
    const modoActivo = document.body.classList.toggle("modo-oscuro");
    localStorage.setItem("modoOscuro", modoActivo);
    aplicarModoOscuro(modoActivo);
  });
});
