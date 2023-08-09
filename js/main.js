const form = document.querySelector("form");
let errors = document.getElementById("errors");

form.addEventListener("change", (e) => {
  e.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let tipoDoc = document.querySelector('input[name="tipoDoc"]:checked');
  let numeroDoc = document.querySelector("#numeroDoc").value;
  let direccion = document.querySelector("#direccion").value;

  /* Primer nombre - Primer apellido */
  let regExpNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{1}[a-záéíóúÁÉÍÓÚñÑ]{2,9}$/;
  let regExpApellido =
    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{1}[a-zA-ZáéíóúÁÉÍÓÚñÑ\'\s]{1,19}$/;

  let inputNombre = document.querySelector("#nombre");
  inputNombre.style.borderRadius = "5px";
  if (nombre.length > 0) {
    errors.innerHTML = "";
    errors.style.display = "block";
    if (!regExpNombre.test(nombre)) {
      errors.innerHTML = `<p>El nombre no es válido</p>`;
      errors.style.display = "block";
      inputNombre.style.border = "2px solid red";
    } else {
      inputNombre.style.border = "2px solid green";
    }
  } else {
    errors.innerHTML += `<p>No se ingresó nombre</p>`;
    errors.style.display = "block";
    inputNombre.style.border = "2px solid red";
  }

  let inputApellido = document.querySelector("#apellido");
  inputApellido.style.borderRadius = "5px";
  if (apellido.length > 0) {
    if (!regExpApellido.test(apellido)) {
      errors.innerHTML += `<p>El apellido no es válido</p>`;
      errors.style.display = "block";
      inputApellido.style.border = "2px solid red";
    } else {
      inputApellido.style.border = "2px solid green";
      inputApellido.style.borderRadius = "5px";
    }
  } else {
    errors.innerHTML += `<p>El apellido es obligatorio</p>`;
    errors.style.display = "block";
    inputApellido.style.border = "2px solid red";
  }

  /* Tipo de documento: */
  let regExpDni =
    /^[0-9]{1,2}[\.]{0,1}[0-9]{3}[\.]{0,1}[0-9]{3}[\.]{0,1}[0-9]{1}$/;
  let regExpCuil = /^[0-9]{2}[-]{0,1}[0-9]{8}[-]{0,1}[0-9]{1}$/;

  let doc = tipoDoc ? tipoDoc.value : null;
  let inputNumeroDoc = document.querySelector("#numeroDoc");
  inputNumeroDoc.style.borderRadius = "5px";

  if (doc === "DNI") {
    if (numeroDoc.length > 0) {
      if (!regExpDni.test(numeroDoc)) {
        errors.innerHTML = `<p>El DNI no es válido</p>`;
        errors.style.display = "block";
        inputNumeroDoc.style.border = "2px solid red";
      } else {
        inputNumeroDoc.style.border = "2px solid green";
      }
    } else {
      errors.innerHTML = `<p>Complete Número DNI</p>`;
      errors.style.display = "block";
      inputNumeroDoc.style.border = "2px solid red";
    }
  } else if (doc === "CUIL") {
    if (numeroDoc.length > 0) {
      if (!regExpCuil.test(numeroDoc)) {
        errors.innerHTML += `<p>El CUIL no es válido</p>`;
        errors.style.display = "block";
        inputNumeroDoc.style.border = "2px solid red";
      } else {
        inputNumeroDoc.style.border = "2px solid green";
      }
    } else {
      errors.innerHTML += `<p>Complete Número CUIL</p>`;
      errors.style.display = "block";
      inputNumeroDoc.style.border = "2px solid red";
    }
  } else if (doc === null) {
    errors.innerHTML += `<p>El tipo de documento es obligatorio</p>`;
    errors.style.display = "block";
    inputNumeroDoc.style.border = "2px solid red";
  }

  /* Dirección: */
  let regExpDireccion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\,\.\-\(\)\'\"\/\°]{10,200}$/;
  let inputDireccion = document.querySelector("#direccion");
  inputDireccion.style.borderRadius = "5px";
  if (direccion.length > 0) {
    if (!regExpDireccion.test(direccion)) {
      errors.innerHTML += `<p>La dirección no es válida</p>`;
      errors.style.display = "block";
      inputDireccion.style.border = "2px solid red";
    } else {
      inputDireccion.style.border = "2px solid green";
    }
  } else {
    errors.innerHTML += `<p>No se ingresó dirección</p>`;
    errors.style.display = "block";
    inputDireccion.style.border = "2px solid red";
  }

  if (errors.innerHTML === "") {
    let success = document.getElementById("success");
    success.innerHTML += `<p>Datos validados correctamente</p>`;
    success.style.color = "green";
    success.style.padding = "10px";
    success.style.textAlign = "center";
    success.style.fontSize = "20px";
  }
});


/* BONUS */
//- Adicionar un botón de reseteo del formulario que, sin recargar la página, 
//restablezca el formulario y quite los errores existentes.

const btn = document.createElement("button");
btn.innerHTML = "Resetear";
btn.setAttribute("type", "reset");
btn.style.background = "blue";
btn.addEventListener("click", () => {
  form.reset();
  let errores = document.getElementById("errors");
  let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.style.border = "2px solid grey";
    });
});

form.appendChild(btn);


//- Agregar al menos 4 campos adicionales con validaciones de distinta índole 
//(ej: email, código postal, etc). 
//Definir criteriosamente las validaciones que correspondan.

const section = document.getElementById("bonus");
section.style.display = "flex";
section.style.flexWrap = "nowrap";
section.style.justifyContent = "center";
section.style.padding = "20px";

const article = document.createElement("article");
article.style.background = "lightblue";

const titulo = document.createElement("h3");
titulo.innerHTML = "Campos adicionales";
titulo.style.padding = "10px";
titulo.style.textAlign = "center";

const camposAdicionales = document.createElement("form");
camposAdicionales.style.display = "flex";
camposAdicionales.style.flexDirection = "column";
camposAdicionales.style.justifyContent = "center";
camposAdicionales.style.padding = "20px";

/* campos adicionales*/
const email = document.createElement("input");
email.setAttribute("type", "email");
email.setAttribute("name", "email");
email.setAttribute("id", "email");
email.setAttribute("placeholder", "Email");
email.setAttribute("required", "");
email.style.padding = "5px";

const regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
email.addEventListener("keyup", () => {
  if (!regExpEmail.test(email.value)) {
    email.style.border = "2px solid red";
  } else {
    email.style.border = "2px solid green";
  }
});

const codigoPostal = document.createElement("input");
codigoPostal.setAttribute("type", "text");
codigoPostal.setAttribute("name", "codigoPostal");
codigoPostal.setAttribute("id", "codigoPostal");
codigoPostal.setAttribute("placeholder", "Código postal");
codigoPostal.setAttribute("required", "");
codigoPostal.style.padding = "5px";

const regExpCodigoPostal = /^[0-9]{4}$/;
codigoPostal.addEventListener("keyup", () => {
  if (!regExpCodigoPostal.test(codigoPostal.value)) {
    codigoPostal.style.border = "2px solid red";
  } else {
    codigoPostal.style.border = "2px solid green";
  }
});

const telefono = document.createElement("input");
telefono.setAttribute("type", "text");
telefono.setAttribute("name", "telefono");
telefono.setAttribute("id", "telefono");
telefono.setAttribute("placeholder", "Teléfono");
telefono.setAttribute("required", "");
telefono.style.padding = "5px";

const regExpTelefono = /^[0-9]{2,4}[-]{0,1}[0-9]{6,8}$/;
//ejemplo: 2396-475746
//ejemplo: 11-65423679

telefono.addEventListener("keyup", () => {
  if (!regExpTelefono.test(telefono.value)) {
    telefono.style.border = "2px solid red";
  } else {
    telefono.style.border = "2px solid green";
  }
});

const contrasenia = document.createElement("input");
contrasenia.setAttribute("type", "password");
contrasenia.setAttribute("name", "contrasenia");
contrasenia.setAttribute("id", "contrasenia");
contrasenia.setAttribute("placeholder", "Contraseña");
contrasenia.setAttribute("required", "");
contrasenia.style.padding = "5px";

const regExpContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//ejemplo: Abcdefg1789

contrasenia.addEventListener("keyup", () => {
  if (!regExpContrasenia.test(contrasenia.value)) {
    contrasenia.style.border = "2px solid red";
  } else {
    contrasenia.style.border = "2px solid green";
  }
});

camposAdicionales.appendChild(email);
camposAdicionales.appendChild(codigoPostal);
camposAdicionales.appendChild(telefono);
camposAdicionales.appendChild(contrasenia);

article.appendChild(titulo);
section.appendChild(article);
article.appendChild(camposAdicionales);

camposAdicionales.addEventListener("keyup", () => {
    if (regExpEmail.test(email.value) && regExpCodigoPostal.test(codigoPostal.value) && regExpTelefono.test(telefono.value) && regExpContrasenia.test(contrasenia.value)) {
    let success = document.getElementById("bonusSuccess");
    success.innerHTML = `<p>Datos validados correctamente</p>`;
    success.style.color = "green";
    success.style.padding = "10px";
    success.style.textAlign = "center";
    success.style.fontSize = "20px";
    } 
  
});
