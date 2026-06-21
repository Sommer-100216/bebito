const inicio = new Date("2025-11-10T01:30:00-05:00");

function actualizarContador() {
  const ahora = new Date();
  let diff = Math.floor((ahora - inicio) / 1000);

  const d = Math.floor(diff / 86400);
  diff %= 86400;

  const h = Math.floor(diff / 3600);
  diff %= 3600;

  const m = Math.floor(diff / 60);
  const s = diff % 60;

  // Cambiado a contador-box para que coincida con tu CSS
  const el = document.getElementById("contador-box");

  if (el) {
    el.innerHTML =
      `${d} días ${h} horas <br>` +
      `${m} minutos ${s} segundos`;
  }
}

setInterval(actualizarContador, 1000);
actualizarContador();
