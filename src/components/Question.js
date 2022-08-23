import React from 'react';
import { Form } from 'react-bootstrap';

export default function Question({answers = []}) {
  return (
    <>
      {answers.map((option, index) => (
        <>
          <h1>{option.title}</h1>
          <form key={index}>
            <Form.Group controlId="kindOfStand">
              {option.options.map((item, index) => (
                <Form.Check
                  key={index}
                  value={index}
                  type="checkbox"
                  checked={item.isChecked}
                  label={item.title}
                  disabled
                  className={item.correct?'text-success':item.isChecked?'text-danger':null}
                />
              ))}
            </Form.Group>
          </form>
        </>
      ))}
    </>
  );
}
