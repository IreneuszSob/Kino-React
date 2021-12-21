import bootstrap from "bootstrap"
import { Container, Form, Nav } from 'react-bootstrap'


const CreateAccount = () => {
  return <Container style={{width: 400,marginTop: 50}}>
   



    <h3>Rejestracja</h3>
    <form>
    
    <div class="form-group">
      <label for="exampleInputEmail1">Login</label>
      <input type="text" class="form-control" placeholder="KlawyMaciek92"></input>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Nazwa</label>
      <input type="text" class="form-control" placeholder="Maciej Kowalski"></input>
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@gmail.com"></input>
      {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">Hasło</label>
      <input type="password" class="form-control" id="exampleInputPassword1"></input>
    </div>
    <div class="form-group form-check">
       {/*<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
      <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
    </div>
    <button type="submit" class="btn btn-primary">Sign up</button>
  </form></Container>
 
              
      
  
};


export default CreateAccount;