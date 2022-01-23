
import { Container, Form, Nav } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import axios from "axios";

const Login = () => {

  const history = useHistory();
  const handleLogIn = (e) => {
    e.preventDefault()

    let login = e.target.elements.login.value
    let password = e.target.elements.password.value

    axios({
        method: 'post',
        url: 'https://pr-movies.herokuapp.com/api/user/auth',
        data: {
            login: login,
            password: password
        }
    }).then((response) => {
        console.log('LOGGED IN');
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', login);
        history.push("/");
        window.location.reload(false);
    }).catch((error) => {
        console.log('ERROR:', error);
    });
}
  return <Container style={{width: '100%',height:'750px'}}>
      <Container style={styles.container}>
      <div style={{fontSize: 67, color:'white'}}>Logowanie</div>
      <form onSubmit={handleLogIn}>
      <div class="form-group">
        <label for="exampleInputEmail1" style={styles.text}>Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder=" " name="login"></input>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" style={styles.text}>Hasło</label>
        <input type="password" class="form-control" id="exampleInputPassword1" name="password"></input>
      </div>
      <div class="form-group form-check">
      </div>
      <button type="submit" class="btn btn-primary">Zaloguj</button>
    </form>
    </Container>
  </Container>            
      
  
};
var styles = {
  container: {
    width: 800,
    marginTop: 150,
    padding: 20,
    backgroundColor: "black",
    borderRadius: 30,
    borderWidth: 5,
  },
  text:{
    color:'white',
    fontSize: 30,
  }
};


export default Login;
