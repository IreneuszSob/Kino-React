import './App.css';
import { Route, Switch,  Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import Home from "./components/home";
import Film from './components/film';
import NavBar from "./components/common/navbar";
import Login from './components/Login/loginPage';
import CreateAccount from './components/Rejestracja/CreateAccountPage';
import Add from './components/AddFilm/addFilm';
import MovieList from './components/MainPage/MovieList';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App" style={{backgroundImage: "url(" + "https://i.stack.imgur.com/E810h.png" + ")",
    backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
      <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route exact path="/"
                    component={MovieList} />

                    <Route exact path="/details/:id"  component={Film} />
                    <Route path="/home" component={Home} />
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={CreateAccount} />
                    <Route path="/add" component={Add} />
                    
                    <Route path="/not-found" component={NotFound} />
                    {/* <Route path="/"
                     component={Filmy}/> */}
                    <Redirect to="/not-found" component={NotFound}/>
                </Switch>
            </div>
        </div>
        <Footer style={{position: "relative", bottom: 0, marginTop: "100vh"}}/>
      </div>
    </div>
  );
}
 

export default App;
