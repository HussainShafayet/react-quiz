import React, {useState} from 'react';
import {Form, Button, Spinner} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = React.useState('');
  const [rememberMe, setRemeberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  // const {login} = useAuth();
  const navigate = useNavigate();
  async function handleLogin(e){
    e.preventDefault();
    console.log(email, password);
    try{
      setError('');
      setLoading(true);
      // await login(email, password);
      setLoading(false);
      navigate('/');
    }catch(error){
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  }
  return (
    <>
      <div className="container">
        <h2 className="text-center">Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Text className="text-danger">{error}</Form.Text>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              value={rememberMe}
              onClick={(e) => setRemeberMe(e.target.value)}
              label="Remember me"
            />
          </Form.Group>
          <Button type="sumbit" className="btn btn-info">
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="sr-only"> Login...</span>
              </>
            ) : (
              "Login"
            )}
          </Button>
        </Form>
      </div>
    </>
  );
}
