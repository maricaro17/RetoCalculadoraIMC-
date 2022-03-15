const stage = {
  bajo: "Por debajo del peso",
  normal: "Saludable",
  medio: "Con sobre peso",
  alto: "Obeso",
  extremo: "Obesidad extrema o de alto riesgo",
};

const getObecity = (imc) => {
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
};
const calcularImc = (peso, altura) => {
  return peso / (altura * 2);
};

export const calcular = (data) => {
  const imc = calcularImc(data.peso, data.altura);
  const obecity = getObecity(imc);
  return { imc, obecity };
};
