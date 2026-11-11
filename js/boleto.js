window.onload = function(){
    var registroGuardado = localStorage.getItem("datosBoleto")
    if (registroGuardado) {
        var BoletoRecuperado = JSON.parse(registroGuardado);
        console.log(BoletoRecuperado)
        document.getElementById("resNombre").innerText = BoletoRecuperado.nombre;
        document.getElementById("resRfc").innerText = BoletoRecuperado.rfc;
        document.getElementById("resArtista").innerText = BoletoRecuperado.artista;
        document.getElementById("resAdultos").innerText = BoletoRecuperado.adultos;
        document.getElementById("resNinos").innerText = BoletoRecuperado.ninos;
        document.getElementById("resZona").innerText = BoletoRecuperado.zona;
        document.getElementById("resTotPersona").innerText = BoletoRecuperado.totPersona;
        document.getElementById("resPrecioNino").innerText = BoletoRecuperado.precioNino;
        document.getElementById("resPrecioAdulto").innerText = BoletoRecuperado.precioAdulto;
        document.getElementById("resTotal").innerText = BoletoRecuperado.total;

    }else{
        alert("No se encontro Boleto")
    }
}