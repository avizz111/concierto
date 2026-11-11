const boleto = {
    nombre : "",
    rfc: "",
    artista:"",
    adultos: 0,
    ninos: 0,
    zona:"",
    totPersona:0,
    precioNino: 0,
    precioAdulto: 0,
    total: 0
}

function calcPersonas() {
    boleto.nombre = document.getElementById("nombre").value;
    boleto.rfc = document.getElementById("rfc").value;
    boleto.artista = document.getElementById("artista").value;
    boleto.adultos = parseInt(document.getElementById("adultos").value);
    boleto.ninos = parseInt(document.getElementById("ninos").value);
    boleto.totPersona = boleto.ninos + boleto.adultos;
    if (boleto.adultos < 1){
        alert("Debe haber al menos un adulto para poder comprar boletos");
        return;
    }
    if (boleto.totPersona <= 5 && boleto.totPersona != null && boleto.totPersona != undefined && boleto.totPersona != 0) {
        alert("Debe haber al menos 5 personas para poder comprar boletos");
        return;
    }
    if (boleto.adultos >= 10 || boleto.ninos >= 6) {
        boleto.zona = "C";
        boleto.precioAdulto = boleto.adultos * 500;
        boleto.precioNino = boleto.ninos * 250;
    } else if (boleto.adultos >= 5 || boleto.ninos >= 3) {
        boleto.zona = "B";
        boleto.precioAdulto = boleto.adultos * 2000;
        boleto.precioNino = boleto.ninos * 1000;
    } else {
        boleto.zona = "A";
        boleto.precioAdulto = boleto.adultos * 5500;
        boleto.precioNino = boleto.ninos * 3500;
    }
    boleto.total = boleto.precioAdulto + boleto.precioNino;
    localStorage.setItem("datosBoleto", JSON.stringify(boleto));
    window.open("boleto.html", "_blank");
}
