/* Acordeón */

const botonAcordeon = document.getElementById("enlaces-nombre");
const acordeonBloque = document.getElementById("header-nav-enlaces-bloque");

botonAcordeon.addEventListener("click", function () {
  acordeonBloque.classList.toggle("header-nav-enlaces-bloque-activo");
  if (acordeonBloque.classList.contains("header-nav-enlaces-bloque-activo")) {
    botonAcordeon.innerHTML = ` <button id="enlaces-nombre" class="enlaces-nombre">Navegación <i class="fa-solid fa-caret-up"></i></i></button> `;
  } else {
    botonAcordeon.innerHTML = ` <button id="enlaces-nombre" class="enlaces-nombre">Navegación <i class="fa-sharp fa-solid fa-caret-down"></i></i></button> `;
  }
});
