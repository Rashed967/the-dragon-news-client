import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders/AuthProviders';

const Login = () => {
  const {loginUser} = useContext(AuthContext)
const location = useLocation()
const from = location?.state?.from?.pathname || '/category/0'
 const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
    .then(result => {
        const loggedUser = result.user;
        navigate(from)
    })
    .catch(error => {
        console.error(error.message)
    })
    form.reset()
}
    return (
        <Container className='w-25 mx-auto'>
          <h2 className='text-center mt-4'>Login</h2>
             <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={<>Accept our <Link to="/terms">terms and conditions</Link></>} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form>
    <p>new to this site? <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Login;