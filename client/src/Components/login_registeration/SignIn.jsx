import React,{useState} from 'react'
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';



const SignIn = (props) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const onLogin = (event)=>{
        event.preventDefault();
        Axios.post("http://localhost:7000/User/login",{
          email:email,
          password:password,
         
        }).then((result)=>{
    
            alert("Login Successful");
            
            localStorage.setItem("Token",result.data.token);
            localStorage.setItem("UserId",result.data.dbuser._id);
            
            
            props.setlogin(false);
            props.setregister(false);
            window.location.reload(false);
           
            
        }).catch((err)=>{
          alert("Invalid login Credentials");
        })
    }


    return (
        <>
            <Container className="justify-content-md-center mt-3" style={{ width: '700px' }}>
                {/* <Row className="mb-3"><Card.Title style={{ fontSize: '30px' }}>Sign In</Card.Title></Row> */}

                <Row>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Col>
                                <Form.Control type="email" placeholder="Email" style = {{maxWidth: "50%"}} value = {email} onChange = {(event)=>{
                                    setEmail(event.target.value);
                                }}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Col>
                                <Form.Control type="password" placeholder="Password"  style = {{maxWidth: "50%"}}  value = {password} onChange = {(event)=>{
                                    setPassword(event.target.value);
                                }}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col>
                                <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>

                       
                        
                       
                    </Form>
                </Row>

                
            </Container>
        <div style = {{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

        <Form.Group as={Row} className="mb-3">
                        
                        <Col>
                        
                        <Button className="btn custom-btn" type="submit" onClick = {onLogin}>Sign In</Button>
                     
                           
                        </Col>
                      
                    </Form.Group>

        </div>
            

            <div style = {{float:"right"}}>
    <Link to = "#"  style = {{textDecoration:"none"}} onClick ={()=>{
   props.setlogin(false);
   props.setregister(true);
 }}><span style = {{color:"black",textDecoration:"none"}}>New User ?</span></Link>
 </div>
        </>
    )
}



export default SignIn;
