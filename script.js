document.addEventListener("DOMContentLoaded", function() {
    // Comenta todo este bloque de código
    /*
    document.getElementById("enlace-servicios").addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("lo-que-ofrecemos").scrollIntoView({
        behavior: "smooth"
      });
    });
    */
  
    const botonEmpiezaAhora = document.getElementById('empiezaAhoraBtn'); // Asegúrate de que el ID sea correcto
    botonEmpiezaAhora.addEventListener('click', function() {
      window.location.href = 'registro.html';
    });
  });