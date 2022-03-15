const form = document.getElementById("enviar");
// Si existe el item en el localStorage retorna el array con la informacion, sino retorna un array vacio
let users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

const getUsers = (user) => {
  // Busca dentro del array un elementoque concuerde con el id user.id
  return users.find((element) => element.phone === user.phone);
};

const submit = (e) => {
  // evita que la pagina se recargue
  e.preventDefault();

  const { name, lastName } = e.target;
  const data = {
    name: name.value,
    lastName: lastName.value,
    };

  // verifica si el usuario esta registrado en el localStorage
  const user = getUsers(data);
  if (!user) {
    users.push(data);

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso");
    form.reset();
  } else {
    alert("Ya existe un usuario registrado con este numero de telefono");
    form.reset();
  }
};
// Agrega el evento submit al formulario
form.addEventListener("submit", (e) => submit(e));