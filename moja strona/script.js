function data() {
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();

    document.getElementById("date").innerHTML = n;
}

function stopk() {
    alert("kliknąłęś w stopkę");
}

function silni() {
    var liczba = document.getElementById("liczby").value;
    var silnia = 1;
    for (var i = 1; i <= liczba; i++) {
        silnia = silnia * i;
    }
    alert(silnia);

}

function dodawanie() {
    var x = document.getElementById("liczba1").value;
    var y = document.getElementById("liczba2").value;
    var result = parseInt(x) + parseInt(y);
    if (Number.isInteger(result)) {
        document.getElementById("tekst").innerHTML += result;
    } else {
        alert("podałeś nie poprawną wartość")
    }
}

function odejmowanie() {
    var x = document.getElementById("liczba1").value;
    var y = document.getElementById("liczba2").value;
    var result = parseInt(x) - parseInt(y);
    if (Number.isInteger(result)) {
        document.getElementById("tekst").innerHTML += result;
    } else {
        alert("podałeś nie poprawną wartość")
    }

}

function mnozenie() {
    var x = document.getElementById("liczba1").value;
    var y = document.getElementById("liczba2").value;
    var result = parseInt(x) * parseInt(y);
    if (Number.isInteger(result)) {
        document.getElementById("tekst").innerHTML += result;
    } else {
        alert("podałeś nie poprawną wartość")
    }

}

function dzielenie() {
    var x = document.getElementById("liczba1").value;
    var y = document.getElementById("liczba2").value;
    var result = parseInt(x) / parseInt(y);
    document.getElementById("tekst").innerHTML += result;
}