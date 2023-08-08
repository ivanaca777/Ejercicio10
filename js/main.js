const form = document.querySelector("form");
let errors = document.getElementById("errors");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let tipoDoc = document.querySelector('input[name="tipoDoc"]:checked');
  let numeroDoc = document.querySelector("#numeroDoc").value;
  let direccion = document.querySelector("#direccion").value;

  /* Primer nombre - Primer apellido */

  let regExpNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{1}[a-záéíóúÁÉÍÓÚñÑ]{2,9}$/;
  let regExpApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{1}[a-zA-ZáéíóúÁÉÍÓÚñÑ\'\s]{1,19}$/;

  if (nombre.length > 0) {
    errors.innerHTML = "";
    errors.style.display = "block";
    if (!regExpNombre.test(nombre)) {
      errors.innerHTML += `<p>El nombre no es válido</p>`;
      errors.style.display = "block";
    } 
  } else {
    errors.innerHTML += `<p>No se ingresó nombre</p>`;
    errors.style.display = "block";
  }

  if (apellido.length > 0) {
    if (!regExpApellido.test(apellido)) {
      errors.innerHTML += `<p>El apellido no es válido</p>`;
      errors.style.display = "block";
    }
  } else {
    errors.innerHTML += `<p>El apellido es obligatorio</p>`;
  }

  /* Tipo de documento: */

  let regExpDni = /^[0-9]{1,2}[\.]{0,1}[0-9]{3}[\.]{0,1}[0-9]{3}[\.]{0,1}[0-9]{1}$/;
  let regExpCuil = /^[0-9]{2}[-]{0,1}[0-9]{8}[-]{0,1}[0-9]{1}$/;
  let doc = tipoDoc ? tipoDoc.value : null;

  if (doc === "DNI") {
    if (!regExpDni.test(numeroDoc)) {
      errors.innerHTML = `<p>El DNI no es válido</p>`;
      errors.style.display = "block";
    } 
  } else if (doc === "CUIL") {
    if (!regExpCuil.test(numeroDoc)) {
      errors.innerHTML = `<p>El CUIL no es válido</p>`;
      errors.style.display = "block";
    } 
  } else if (doc === null) {
    errors.innerHTML += `<p>El tipo de documento es obligatorio</p>`;
    errors.style.display = "block";
  }

  /* Dirección: */

  let regExpDireccion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\,\.\-\(\)\'\"\/\°]{10,200}$/;

  if (direccion.length > 0) {
    if (!regExpDireccion.test(direccion)) {
      errors.innerHTML += `<p>La dirección no es válida</p>`;
      errors.style.display = "block";
    } 
  } else {
    errors.innerHTML += `<p>No se ingresó dirección</p>`;
    errors.style.display = "block";
  }

});
