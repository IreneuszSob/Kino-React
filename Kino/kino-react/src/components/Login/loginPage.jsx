import bootstrap from "bootstrap"
import { Container, Form, Nav } from 'react-bootstrap'


const Login = () => {
  return <Container >
      <Container style={{width: 400,marginTop: 150}}>
      <h3>Logowanie</h3>
      <form >
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@gmail.com"></input>
        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"></input>
      </div>
      <div class="form-group form-check">
        {/*<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </Container>
  </Container>            
      
  
};


export default Login;
