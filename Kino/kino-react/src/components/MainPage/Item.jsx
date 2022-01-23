import { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            pic: props.pic,
            desc: props.desc,
            id: props.id
        };
    }

    render(){
        // var x =this.state.desc.length > 250 ? this.state.desc.substring(0,250) + "..." : this.state.desc
        return(
            <div style={styles.conteiner}>
                <div className = "row">
                    <div className = "col-sm-4">
                        <img src={this.state.pic} className="img-fluid" style={styles.picture} />
                        
                    </div>
                    <div className = "col-sm-8">
                        <div style={styles.headline}>{this.state.title}</div>
                        <div style={styles.text}>{this.state.desc}</div>
                        <div style={{textAlign: 'center'}}>
                        <Link to={"/details/" + this.state.id}><button type="button" class="btn btn-light" style={styles.button}>Zobacz!</button></Link>
                            
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }





}
    var styles = {
        headline: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 40,
            marginTop: 0,
            color: "white",
            padding:"20px",
            //width: 200,
            // backgroundColor: 'yellow',
        },
        text:{
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
            padding: "60px",
        },
        picture:{
            width: '300px'
        },
        conteiner:{
            backgroundColor: "black",
            padding: "50px",
            borderRadius: 30,
            borderWidth: 5,
            borderColor: 'white'
        },
        button:{
            width: '300px',
            fontSize: 20,
            fontWeight: 'bold',

        }


    }

export default Item;