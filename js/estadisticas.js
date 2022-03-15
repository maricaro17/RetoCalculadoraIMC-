import { getArrayItem } from "./storage.js";
const users = getArrayItem("users");
const countPersonasPorDebajoDelPeso = (users) => {
    return {
        general: users.filter((element) => element.imc < 18.5).length,
        hombre: users.filter((element) => element.imc < 18.5 && element.sexo === "Masculino").length,
        mujer: users.filter((element) => element.imc < 18.5 && element.sexo === "Femenino").length,  
    }
};

const countPersonasConPesoSaludable = (users) => {
    return {
        general: users.filter((element) =>element.imc > 18.5 && element.imc < 24.9).length,
        hombre: users.filter((element) =>element.imc > 18.5 && element.imc < 24.9 && element.sexo === "Masculino").length,
        mujer: users.filter((element) =>element.imc > 18.5 && element.imc < 24.9 && element.sexo === "Femenino").length,  
    }

};

const countPersonasConSobrePeso = (users) => {
    return {
        general: users.filter((element) =>element.imc >= 25.0 && element.imc < 29.9).length,
        hombre: users.filter((element) =>element.imc >= 25.0 && element.imc < 29.9 && element.sexo === "Masculino").length,
        mujer: users.filter((element) =>element.imc >= 25.0 && element.imc < 29.9 && element.sexo === "Femenino").length,  
    }
};

const countPersonasConObesidad = (users) => {
    return {
        general: users.filter((element) => element.imc >= 30.0 && element.imc < 39.9).length,
        hombre: users.filter((element) => element.imc >= 30.0 && element.imc < 39.9 && element.sexo === "Masculino").length,
        mujer: users.filter((element) => element.imc >= 30.0 && element.imc < 39.9 && element.sexo === "Femenino").length,  
    }
};
const countPersonasConObesidadExtrema = (users) => {
    return {
        general: users.filter((element) => element.imc >40).length,
        hombre: users.filter((element) => element.imc >40 && element.sexo === "Masculino").length,
        mujer: users.filter((element) => element.imc >40 && element.sexo === "Femenino").length,  
    }
  };
export const getEstadisticas = () => {
  return {
    bajo: countPersonasPorDebajoDelPeso(users),
    normal: countPersonasConPesoSaludable(users),
    medio: countPersonasConSobrePeso(users),
    alto: countPersonasConObesidad(users),
    extremo: countPersonasConObesidadExtrema(users)
  };
};
