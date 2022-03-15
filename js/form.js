import { getArrayItem, setItem } from "./storage.js";
import { calcular } from "./imc.js";
import { getEstadisticas } from "./estadisticas.js";
let sex;
const btnMan = document.querySelector("#man");
const btnWoman = document.querySelector("#woman");
const nameResult = document.getElementById("name-result");
const lastNameResult = document.getElementById("lastName-result");
const imcResult = document.getElementById("imc");
const pesoResult = document.getElementById("peso-result");
const edadResult = document.getElementById("edad-result");
const alturaResult = document.getElementById("altura-result");
const sexResult = document.getElementById("sexo");
const descriptionResult = document.getElementById("description-result");
const mujerBajo = document.getElementById("mujer-bajo");
const hombreBajo = document.getElementById("hombre-bajo");
const generalBajo = document.getElementById("general-bajo");
const mujerNormal = document.getElementById("mujer-normal");
const hombreNormal = document.getElementById("hombre-normal");
const generalNormal = document.getElementById("general-normal");
const mujerSobrepeso = document.getElementById("mujer-sobrepeso");
const hombreSobrepeso = document.getElementById("hombre-sobrepeso");
const generalSobrepeso = document.getElementById("general-sobrepeso");
const mujerObeso = document.getElementById("mujer-obeso");
const hombreObeso = document.getElementById("hombre-obeso");
const generalObeso = document.getElementById("general-obeso");
const mujerExtremo = document.getElementById("mujer-extrema");
const hombreExtremo = document.getElementById("hombre-extrema");
const generalExtremo = document.getElementById("general-extrema");

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
const form = document.getElementById("register");
let users = getArrayItem("users");

const getUser = (user) => {
  return users.find((element) => element.email === user.email);
};

const submit = (e) => {
  e.preventDefault();
  const { firtsName, lastName, email, edad, peso, altura } = e.target;
  const data = {
    name: firtsName.value,
    lastName: lastName.value,
    email: email.value,
    sexo: sex,
    edad: edad.value,
    peso: peso.value,
    altura: altura.value,
  };

  const { imc, obecity } = calcular(data);
  const userInfo = { ...data, imc, obecity: obecity.message };
  const user = getUser(userInfo);

  if (!user) {
    users.push(userInfo);
    setItem("users", users);
    const { bajo, normal, medio, alto, extremo } = getEstadisticas();
    form.reset();
    nameResult.innerHTML = userInfo.name;
    lastNameResult.innerHTML = userInfo.lastName;
    sexResult.innerHTML = sex;
    pesoResult.innerHTML = `${userInfo.peso} Kg`;
    alturaResult.innerHTML = `${userInfo.altura} Mts`;
    edadResult.innerHTML = `${userInfo.edad} Años`;
    imcResult.innerHTML = imc.toFixed(2);
    imcResult.style.color = obecity.color;
    descriptionResult.innerHTML = obecity.message;
    mujerBajo.innerHTML = bajo.mujer;
    hombreBajo.innerHTML = bajo.hombre;
    generalBajo.innerHTML = bajo.general;
    mujerNormal.innerHTML = normal.mujer;
    hombreNormal.innerHTML = normal.hombre;
    generalNormal.innerHTML = normal.general;
    mujerSobrepeso.innerHTML = medio.mujer;
    hombreSobrepeso.innerHTML = medio.hombre;
    generalSobrepeso.innerHTML = medio.general;
    mujerObeso.innerHTML = alto.mujer;
    hombreObeso.innerHTML = alto.hombre;
    generalObeso.innerHTML = alto.general;
    mujerExtremo.innerHTML = extremo.mujer;
    hombreExtremo.innerHTML = extremo.hombre;
    generalExtremo.innerHTML = extremo.general;
  } else {
    alert("El usuario ya existe");
    form.reset();
  }
};


form.addEventListener("submit", (e) => submit(e));
