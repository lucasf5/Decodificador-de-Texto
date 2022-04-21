const input = document.querySelector(".input__texto");
const criptografar = document.querySelector(".botoes__botaoEscuro");
const descriptografar = document.querySelector(".botoes__botaoClaro");

const resultado = document.querySelector(".containerEsquerdo__infos");
const localDoResultado = document.querySelector(".containerEsquerdo");

criptografar.addEventListener("click", () => {
  if (document.querySelector(".containerEsquerdo__h2")) {
    document.querySelector(".containerEsquerdo__h2").remove();
  }
  if (input.value !== "") {
    const inputValue = input.value;

    const criptografada = criptografando(inputValue);

    resultado.style.display = "none";
    const h2 = document.createElement("input");
    h2.className = "containerEsquerdo__h2";
    h2.value = criptografada;
    h2.readOnly;

    localDoResultado.appendChild(h2);
  }
});

function criptografando(inputValue) {
  const resultCript = inputValue
    .replace(/[e]/gi, "enter")
    .replace(/[i]/gi, "imes")
    .replace(/[a]/gi, "ai")
    .replace(/[o]/gi, "ober")
    .replace(/[u]/gi, "ufat");
  return resultCript;
}

descriptografar.addEventListener("click", () => {
  if (document.querySelector(".containerEsquerdo__h2")) {
    document.querySelector(".containerEsquerdo__h2").remove();
  }
  if (input.value !== "") {
    const inputValue = input.value;

    const descriptografada = descriptografando(inputValue);

    resultado.style.display = "none";
    const h2 = document.createElement("input");
    h2.className = "containerEsquerdo__h2";
    h2.value = descriptografada;
    h2.readOnly;

    localDoResultado.appendChild(h2);
  }
});

function descriptografando(inputValue) {
  const resultDes = inputValue
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  return resultDes;
}

document
  .querySelector(".containerEsquerdo__botaoEscuro")
  .addEventListener("click", () => {
    document.querySelector(".containerEsquerdo__h2").select();

    document.execCommand("copy");
  });
