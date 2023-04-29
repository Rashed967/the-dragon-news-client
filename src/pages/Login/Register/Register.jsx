import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders/AuthProviders';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [accepted, setAccepted] = useState(null)
    
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
        })
        .catch(error => {
            console.error(error.message)
        })
        form.reset()
    }

    const handleAccepted = (event) => {
      setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto'>
            <h2 className='text-center mt-4'>Register</h2>
             <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" name='name' id='name' placeholder="Your name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' id='photo' placeholder="Photo url" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept our <Link to="/terms">terms and conditions</Link></>} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Submit
      </Button>
      <br />
      <Form.Text className="text-muted">
         We'll never share your email with anyone else.
        </Form.Text>
    </Form>
    <p>Already have an account? <Link to="/login">Login</Link></p>
        </Container>
    );
};

export default Register;