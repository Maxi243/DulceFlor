function enviarWhatsApp() {
    const mensaje = document.getElementById("mensaje").value;
    const telefono = "5491127477898"; // 👈 tu número con código país

    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
  }