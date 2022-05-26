import { Controls, Table } from "./components";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const datos = [
    {
      nombre: "Pepe",
      apellido: "Perez",
      celular: "123456789",
      correo: "pepe@gmail.com",
    },
    {
      nombre: "Juan",
      apellido: "Zapata",
      celular: "88888",
      correo: "juan@gmail.com",
    },
    {
      nombre: "Carlos",
      apellido: "Juarez",
      celular: "99999",
      correo: "carlos@gmail.com",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React!</p>
        <Table datos={datos} />
        <Controls sumar={"Texto para sumar"} restar="texto para restar" />
      </header>
    </div>
  );
};

export default App;
