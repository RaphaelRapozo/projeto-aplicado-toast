import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import ToastCadastrarColaborador from "./toastCadastrarColaborador";
import ToastCadastrarMaster from "./toastCadastrarMaster";
import ToastCadastrarMedico from "./toastCadastrarMedico";
import ToastCadastrarPaciente from './toastCadastrarPaciente';
import ToastCadastrarProcedimento from "./toastCadastrarProcedimento";
import ToastCadastrarUsuario from "./toastCadastrarUsuario";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ToastCadastrarPaciente} />
      </Switch>
      <Switch>
        <Route exact path="/" component={ToastCadastrarUsuario} />
      </Switch>
      <Switch>
        <Route exact path="/" component={ToastCadastrarColaborador} />
      </Switch>
      <Switch>
        <Route exact path="/" component={ToastCadastrarMaster} />
      </Switch>
      <Switch>
        <Route exact path="/" component={ToastCadastrarMedico} />
      </Switch>
      <Switch>
        <Route exact path="/" component={ToastCadastrarProcedimento} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;