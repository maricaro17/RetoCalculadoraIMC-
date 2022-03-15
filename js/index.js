let sex;
const btnMan = document.querySelector("#man");
const btnWoman = document.querySelector("#woman");

btnMan.addEventListener("click", function () {
  btnWoman.style.border = "1px solid white";
  btnMan.style.border = "1px solid #03db03";
  sex = "Masculino";
});

btnWoman.addEventListener("click", function () {
  btnMan.style.border = "1px solid white";
  btnWoman.style.border = "1px solid #03db03";
  sex = "Femenino";
});

const stage = {
  bajo: "Por debajo del peso",
  normal: "Saludable",
  medio: "Con sobre peso",
  alto: "Obeso",
  extremo: "Obesidad extrema o de alto riesgo",
};


function getObecity(imc) {
  const state = {
    color: "",
    message: "",
  };

  if (imc < 18.5) {
    state.message = stage.bajo;
    state.color = "#93b4d7";
  } else if (imc >= 18.5 && imc < 24.9) {
    state.message = stage.normal;
    state.color = "#8fc69f";
  } else if (imc >= 25.0 && imc < 29.9) {
    state.message = stage.medio;
    state.color = "#f9d648";
  } else if (imc >= 30.0 && imc < 39.9) {
    state.message = stage.alto;
    state.color = "#d65c5b";
  } else {
    state.message = stage.extremo;
    state.color = "#f73f01";
  }
  return state;
}

function calcularImc() {
  const nameResult = document.getElementById("name-result");
  const lastNameResult = document.getElementById("lastName-result");
  const imcResult = document.getElementById("imc");
  const pesoResult = document.getElementById("peso-result");
  const edadResult = document.getElementById("edad-result");
  const alturaResult = document.getElementById("altura-result");
  const sexResult = document.getElementById("sexo");
  const descriptionResult = document.getElementById("description-result");
  const firtsName = document.getElementById("firtsName");
  const lastName = document.getElementById("lastName");
  
  let edad = document.getElementById("edad");
  let peso = document.getElementById("peso");
  let altura = document.getElementById("altura");

  const imc = peso.value / (altura.value * 2);
  const description = getObecity(imc);
  nameResult.innerHTML = firtsName.value;
  lastNameResult.innerHTML = lastName.value;
  sexResult.innerHTML = sex;
  pesoResult.innerHTML = `${peso.value} Kg`;
  alturaResult.innerHTML = `${altura.value} Mts`;
  edadResult.innerHTML = `${edad.value} Años`;
  imcResult.innerHTML = imc.toFixed(2);
  imcResult.style.color = description.color;
  descriptionResult.innerHTML = description.message;
}
