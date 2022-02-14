import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import BuynowS1 from "../components/buynow-s1";

class Buynow extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <BuynowS1/>
            </Container>    
        );
    }
}

export default Buynow;