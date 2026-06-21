function actualizarFondoPorHora() {
    // 1. Obtenemos la hora actual formateada en la zona horaria de Baja California (Tijuana)
    const opciones = { timeZone: 'America/Tijuana', hour: '2-digit', minute: '2-digit', hour12: false };
    const horaLocalTijuana = new Intl.DateTimeFormat('es-MX', opciones).format(new Date());
    
    // Convertimos la hora de "HH:MM" a minutos totales desde que empezó el día para que evaluar los rangos sea exacto
    const [horas, minutos] = horaLocalTijuana.split(':').map(Number);
    const minutosTotales = (horas * 60) + minutos;

    // 2. Definimos las variables para la imagen seleccionada
    let imagenFondo = "[6]_noche.jpg"; // Por defecto la noche (así cubre la madrugada hasta las 5:29)
    // 
    /* 🔥 CONTADOR FIJO EXCLUSIVO */
#contador-box {
    position: absolute;
    top: 37%;
    left: 35%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #c03a6b; /* Tu color rosa/fucsia personalizado */
    font-size: 18px;
    font-family: inherit; 
    font-weight: bold;
    z-index: 99999; /* 🔥 SIEMPRE ENCIMA */
    padding: 10px 15px;
    line-height: 1.4;
    pointer-events: none; /* Opcional: hace que los clics pasen a través del texto si estorba a un botón */
}


    // Helper para convertir formato HH:MM a minutos totales
    const aMinutos = (h, m) => (h * 60) + m;

    // 3. Evaluamos los rangos exactos de tu tabla
    if (minutosTotales >= aMinutos(5, 30) && minutosTotales < aMinutos(7, 30)) {
        imagenFondo = "[1]_amanecer.jpg";
    } 
    else if (minutosTotales >= aMinutos(7, 30) && minutosTotales < aMinutos(11, 30)) {
        imagenFondo = "[2]_dia.jpg";
    } 
    else if (minutosTotales >= aMinutos(11, 30) && minutosTotales < aMinutos(15, 0)) {
        imagenFondo = "[3]_mediodia.jpg";
    } 
    else if (minutosTotales >= aMinutos(15, 0) && minutosTotales < aMinutos(17, 30)) {
        imagenFondo = "[4]_tarde.jpg";
    } 
    else if (minutosTotales >= aMinutos(17, 30) && minutosTotales < aMinutos(19, 30)) {
        imagenFondo = "[5]_atardecer.jpg";
    }
    // Si no entra en ninguno, se queda con la noche (19:30 a 05:29)

    // 4. Cambiamos la imagen en el HTML (buscando el elemento con el ID "fondo-dinamico")
    const imgElemento = document.getElementById('fondo-dinamico');
    if (imgElemento) {
        imgElemento.src = `main-time/${imagenFondo}`;
    }
}

// Ejecutar la función apenas cargue la página
window.onload = actualizarFondoPorHora;

// Opcional: Revisa la hora cada minuto por si el usuario deja la página abierta y cambia de rango solo
setInterval(actualizarFondoPorHora, 60000);
