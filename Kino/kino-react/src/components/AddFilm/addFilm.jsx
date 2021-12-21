import bootstrap from "bootstrap"
import { Container, Form, Nav } from 'react-bootstrap'


const Add = () => {
  return <Container style={{width: 400,marginTop: 50}}>
    <h3>Dodaj Film</h3>
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Tytuł</label>
      <input type="text" class="form-control" ></input>
    </div>
    <div class="form-group">
      <label for="">URL plakatu</label>
      <input type="text" class="form-control" ></input>
    </div>
    <div class="form-group">
      <label for="">Opis</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="">Ocena</label>
      <input type="text" class="form-control" ></input>
    </div>
    
    <button type="submit" class="btn btn-primary">Dodaj Film</button>
  </form></Container>
              
      
  
};


export default Add;