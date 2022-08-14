import React, { useState } from 'react';
import {Form, Button, Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function SignUpForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [agree, setAgree] = useState(false);

    const {signup} = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username, email, password, confirmPassword, agree);
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }else{
            setError('');
        }
        if (!agree) {
            setError('You must agree to the terms and conditions');
            return;
        }else{
            setError('');
        }
        try{
            setError('');
            setLoading(true);
            await signup(email, password, username);
            setLoading(false);
            navigate('/');

        }catch(error){
            console.log(error);
            setLoading(false);
            setError(error);
        }

    }


  return (
    <>
      <Form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <Form.Label className="form-label" for="form3Example1c">
              Your Name
            </Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              name="username"
              value={username}
              required
              onInput={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <Form.Label className="form-label" for="form3Example3c">
              Your Email
            </Form.Label>
            <Form.Control
              type="email"
              className="form-control"
              name="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <Form.Label className="form-label" for="form3Example4c">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              name="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <Form.Label className="form-label" for="form3Example4cd">
              Repeat your password
            </Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              name="confirmPassword"
              value={confirmPassword}
              onInput={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <small className="form-text text-danger">{error}</small>
          </div>
        </div>

        <div className="form-check d-flex justify-content-center mb-5">
          <Form.Control
            className="form-check-input me-2"
            type="checkbox"
            value={agree}
            onInput={(e) => setAgree(e.target.checked)}
          />
          <Form.Label className="form-check-label" for="form2Example3">
            I agree all statements in <a href="#!">Terms of service</a>
          </Form.Label>
        </div>

        <div className="d-flex justify-content-center flex-column mx-4">
          <Button type='sumbit' className='btn btn-info' disable={loading}>
            {loading ?
              <div>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                <span className="sr-only">Sign up...</span>
              </div>  
             : 'Sign Up'}
          </Button>
          <span>
            Already have an account? <Link to="login">Login</Link>
          </span>
        </div>
      </Form>
    </>
  );
}
