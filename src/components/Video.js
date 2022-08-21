import React from 'react';
import { Card,Button } from 'react-bootstrap';
import image from '../assets/sunflower.jpg';

export default function Video(props) {
  const {title,id,noq} = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <div className='d-flex justify-content-between'>
              <span>Number of Question: {noq}</span>
              <span>Score: {noq*5}</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
