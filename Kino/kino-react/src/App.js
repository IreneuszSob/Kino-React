import './App.css';
import { Route, Switch,  Redirect } from "react-router-dom";
import Filmy from "./components/Filmy";
import NotFound from "./components/notFound";
import Home from "./components/home";
import Film from './components/film';
import NavBar from "./components/common/navbar";
import Login from './components/Login/loginPage';
import CreateAccount from './components/Rejestracja/CreateAccountPage';
import Add from './components/AddFilm/addFilm';


function App() {
  return (
      <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
                <Switch>
                    
                    <Route path="/Filmy"
                     component={Filmy}/>
                    <Route exact path="/details/:id"  component={Film} />
                    
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={CreateAccount} />
                    <Route path="/add" component={Add} />
                    
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/"
                     component={Filmy}/>
                    <Redirect to="/not-found" component={NotFound}/>
                </Switch>
            </div>
        </div>
      </div>
  );
}
 

export default App;
