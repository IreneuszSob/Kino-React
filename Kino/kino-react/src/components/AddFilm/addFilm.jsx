import bootstrap from "bootstrap"
import { Container, Form, Nav } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import axios from "axios";




const Add = () => { 
  const history = useHistory();
  const handleAdd = (e) => {

  
    e.preventDefault()
    axios({
        method: 'post',
        url: 'https://pr-movies.herokuapp.com/api/movies',
        data: {
            title: e.target.elements.title.value,
            image: e.target.elements.img_link.value,
            content: e.target.elements.description.value
        }
    }).then((response) => {
        console.log('MOVIE ADDED');
        console.log(e.target.elements.img_link.value);
        console.log(e.target.elements.description.value);
        history.push("/");
    }).catch((error) => {
        console.log('ERROR:', error);
    });
  }

  return <Container style={{width: '100%',height:'800px'}}>
  <Container style={styles.container}>




   <div style={{fontSize: 67, color:'white'}}>Dodaj film</div>
    <form onSubmit={handleAdd}>
    <div class="form-group">
      <label for="exampleInputEmail1" style={styles.text}>Tytuł filmu</label>
      <input type="text" class="form-control" name="title"></input>
    </div>
    <div class="form-group">
      <label for="" style={styles.text}>URL plakatu</label>
      <input type="text" class="form-control" name="img_link"></input>
    </div>
    <div class="form-group" >
      <label for="" style={styles.text}>Opis filmu</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="description"></textarea>
    </div>

    
    <button type="submit" class="btn btn-primary" style={{marginTop: 30}}>Dodaj Film</button>
  </form></Container></Container>
              
      
  
};
var styles = {
  container: {
    width: 800,
    marginTop: 150,
    padding: 20,
    backgroundColor: "black",
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 5,
  },
  text:{
    color:'white',
    fontSize: 30,
  }
};

export default Add;