let a1 = document.getElementById("a/1");
let b2 = document.getElementById("b/2");
let c3 = document.getElementById("c/3");
let d4 = document.getElementById("d/4");
let e5 = document.getElementById("e/5");
let f6 = document.getElementById("f/6");
let g7 = document.getElementById("g/7");
let h8 = document.getElementById("h/8");
let i9 = document.getElementById("i/9");
let j0 = document.getElementById("j/0");
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");
const agregara1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "") {
      numeros.innerHTML = "1";
    } else {
      alert("procedimiento erroneo");
    }
  }
};
const agregarb2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else {
    if (numeros.innerHTML == "1" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "2";
    } else {
      alert("procedimiento erroneo");
    }
  }
};
const agregarc3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else {
    if (numeros.innerHTML == "12" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "3";
    } else {
      alert("procedimiento erroneo");
    }
  }
};
const agregard4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else {
    if (numeros.innerHTML == "123" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "4";
    } else {
      alert("procedimiento erroneo");
    }
  }
};
const agregare5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else {
    if (numeros.innerHTML == "1234" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "5";
    } else {
      alert("procedimiento erroneo");
    }
  }
};
const agregarf6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else {
    if (numeros.innerHTML == "12345" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "6";
    } else {
      alert("procedimiento erroneo");
    }
  }
};
const agregarg7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else {
    if (numeros.innerHTML == "123456" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "7";
    } else {
      alert("procedimiento erroneo");
    }
  }
};
const agregarh8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else {
    if (numeros.innerHTML == "1234567" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "8";
    } else {
      alert("procedimiento erroneo");
    }
  }
};
const agregari9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else {
    if (numeros.innerHTML == "12345678" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "9";
    } else {
      alert("procedimiento erroneo");
    }
  }
};
const agregarj0 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else {
    if (numeros.innerHTML == "123456789" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "0";
    } else {
      alert("procedimiento erroneo");
    }
  }
};

a1.onclick = function () {
  agregara1();
};
b2.onclick = function () {
  agregarb2();
};
c3.onclick = function () {
  agregarc3();
};
d4.onclick = function () {
  agregard4();
};
e5.onclick = function () {
  agregare5();
};
f6.onclick = function () {
  agregarf6();
};
g7.onclick = function () {
  agregarg7();
};
h8.onclick = function () {
  agregarh8();
};
i9.onclick = function () {
  agregari9();
};
j0.onclick = function () {
  agregarj0();
};
