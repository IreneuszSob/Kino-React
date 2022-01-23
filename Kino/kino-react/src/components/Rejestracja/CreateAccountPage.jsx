
import bootstrap from "bootstrap"
import { Container, Form, Nav } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import axios from "axios";


const CreateAccount = () => {

  const history = useHistory();
  const handleSignUp = (e) => {
    e.preventDefault()

    let username = e.target.elements.username.value
    let email = e.target.elements.email.value
    let password = e.target.elements.password.value

    axios({
        method: 'post',
        url: 'https://pr-movies.herokuapp.com/api/user/create',
        data: {
            name: username,
            email: email,
            password: password
        }
    }).then((response) => {
        console.log('SIGNED UP', response);
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: username,
                password: password
            }
        }).then((response) => {
            console.log('LOGGED IN', response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', username);
            history.push('/');
            window.location.reload(false);
        }).catch((error) => {
            console.log(error.response);
        });
    }).catch((error) => {
        console.log('ERROR:', error.response);
    });
}
  return <Container style={{width: '100%',height:'750px'}}>
   <Container style={styles.container}>




    <div style={{fontSize: 67, color:'white'}}>Rejestracja</div>
    <form onSubmit={handleSignUp}>
    
    {/* <div class="form-group">
      <label for="exampleInputEmail1">Login</label>
      <input type="text" class="form-control" placeholder="KlawyMaciek92"></input>
    </div> */}
    <div class="form-group">
      <label for="exampleInputEmail1" style={styles.text}>Nazwa</label>
      <input type="text" class="form-control" placeholder="Maciej Kowalski" name="username"></input>
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1" style={styles.text}>Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@gmail.com" name="email"></input>
      {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1" style={styles.text}>Hasło</label>
      <input type="password" class="form-control" id="exampleInputPassword1" name="password"></input>
    </div>
    <div class="form-group form-check">
       {/*<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
      <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
    </div>
    <button type="submit" class="btn btn-primary">Zarejestruj</button>
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

export default CreateAccount;