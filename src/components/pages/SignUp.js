import React from 'react'
import { Button, Form, } from 'react-bootstrap';
import imageSrc from "../../assets/sunflower.jpg";


export default function SignUp() {
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <Form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <Form.Control
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                            <Form.Label
                              className="form-label"
                              for="form3Example1c"
                            >
                              Your Name
                            </Form.Label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <Form.Control
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <Form.Label
                              className="form-label"
                              for="form3Example3c"
                            >
                              Your Email
                            </Form.Label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <Form.Control
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <Form.Label
                              className="form-label"
                              for="form3Example4c"
                            >
                              Password
                            </Form.Label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <Form.Control
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                            />
                            <Form.Label
                              className="form-label"
                              for="form3Example4cd"
                            >
                              Repeat your password
                            </Form.Label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <Form.Control
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <Form.Label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </Form.Label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Button
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </Button>
                        </div>
                      </Form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={imageSrc} alt="sample" width="150px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
