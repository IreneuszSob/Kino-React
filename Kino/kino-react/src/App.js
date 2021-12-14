import './App.css';
import { Route, Switch,  Redirect } from "react-router-dom";
import Filmy from "./components/Filmy";
import NotFound from "./components/notFound";
import Home from "./components/home";
import Film from './components/film';
import NavBar from "./components/common/navbar";


function App() {
  return (
      <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/Filmy"
                     component={Filmy}/>
                    <Route exact path="/film/:id"  component={Film} />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/"  component={NotFound} />
                    
                    <Redirect to="/not-found" />
                </Switch>
            </div>
        </div>
      </div>
  );
}
 

export default App;
