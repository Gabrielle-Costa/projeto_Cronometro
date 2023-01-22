
let hr = 0;
let min = 0;
let seg = 0;
let cronometrar;

function start() {
    iniciar()
    cronometrar = setInterval(iniciar, 1000);
}

function pausou() {
    clearInterval(cronometrar);
}

function parou() {
    clearInterval(cronometrar);
    hr = 0;
    min = 0;
    seg = 0;

    document.getElementById('timer').innerText = digito(hr) + ":" + digito(min) + ":" + digito(seg);
}

function iniciar() {
    seg++;
    if (seg == 60) {
        min++;
        seg = 0;
        if (min == 60) {
            hr++;
            min = 0;
        }
    }

    document.getElementById('timer').innerText = digito(hr) + ":" + digito(min) + ":" + digito(seg);
}

function digito(n) {
    if (n < 10) {
        return ("0" + n);
    } else return n;
}