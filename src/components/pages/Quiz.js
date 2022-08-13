import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Quiz() {
  return (
    <div>
      <h1>Quiz</h1>
      <form>
        <Form.Group controlId="kindOfStand">
          <Form.Check
            value="answer1"
            type="radio"
            aria-label="answer 1"
            label="Answar 1"
          />
          <Form.Check
            value="answer2"
            type="radio"
            aria-label="answer 2"
            label="Answar 2"
          />
        </Form.Group>
      </form>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
      </div>
    </div>
  );
}
