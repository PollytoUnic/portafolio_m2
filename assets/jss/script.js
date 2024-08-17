document.getElementById('boton').addEventListener('click', () => {
    const mensaje="Me contactare a la brevadad";
    window.location.href="respuesta.html?mensaje=" + mensaje;
});
