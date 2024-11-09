var a = "";
var b = "";
var k = 0;
var rez;
var p;
var op;
var boolean = false;


function vv(p) {
    var disp = document.getElementById("dd");
    if (p === '.' && ((a.includes('.') && k === 0) || (b.includes('.') && k === 1))) {
        return;
    } else if (k === 0) {
        a = a + p;
        disp.value += p
    } else if (k === 1) {
        b = b + p;
        disp.value += p
    }
}


function sum() {
    if (a == "") {
        alert("Введите первый операнд а затем нажмите кнопку со знаком арифметической операции")
    } else {
        document.getElementById("dd").value += "+";
        op = "summa";
        k = 1;
        boolean = true;
    }
}


function dif() {
    if (a == "") {
        alert("Введите первый операнд а затем нажмите кнопку со знаком арифметической операции")
    } else {
        document.getElementById("dd").value += "-";
        op = "difference";
        k = 1;
        boolean = true;
    }
}


function mul() {
    if (a == "") {
        alert("Введите первый операнд а затем нажмите кнопку со знаком арифметической операции")
    } else {
        document.getElementById("dd").value += "*";
        op = "multip";
        k = 1;
        boolean = true;
    }
}


function div() {
    if (a == "") {
        alert("Введите первый операнд а затем нажмите кнопку со знаком арифметической операции")
    } else {
        document.getElementById("dd").value += "/";
        op = "division";
        k = 1;
        boolean = true;
    }
}


function kor() {
    if (boolean == false) {
        var l = a.length;
        l = l - 1;
        a = a.substring(0, l);
        document.getElementById("dd").value = a;
    } else {
        var j = b.length;
        j = j - 1;
        b = b.substring(0, j);
        document.getElementById("dd").value = document.getElementById("dd").value.substring(0, document.getElementById("dd").value.length - 1)
    }
}


function det() {
    if (op == "summa") {
        rez = 1 * a + 1 * b;
        document.getElementById("dd").value = rez.toFixed(3)
    }
    ;
    if (op == "difference") {
        rez = (1 * a) - (1 * b);
        document.getElementById("dd").value = rez.toFixed(3)
    }
    ;
    if (op == "multip") {
        rez = a * b;
        document.getElementById("dd").value = rez.toFixed(3)
    }
    ;
    if (op == "division") {
        rez = a / b;
        document.getElementById("dd").value = rez.toFixed(3)
    }
    ;
    boolean = false;
}


function cle() {
    a = "";
    b = "";
    document.getElementById("dd").value = "";
    k = 0;
    boolean = false
};