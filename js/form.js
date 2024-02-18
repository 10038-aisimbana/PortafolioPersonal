function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var numero = document.getElementById("numero").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "" || numero === "") {
      alert("Información incompleta. Por favor, complete todos los campos del formulario.");
      return;
    } 
    alert("¡Formulario enviado con éxito!\n\nNombre: " + nombre + "\nEmail: " + email + "\nNumero de teléfono: " + numero + "\nMensaje: " + mensaje + "\n\n Gracias, me contactare contigo lo mas pronto posible.");
  }