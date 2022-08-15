import React from 'react';
import Video from './Video';
import {Link} from 'react-router-dom';

export default function Videos() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <Link to="quiz">
            <Video />
          </Link>
        </div>
        <div className="col-lg-4 col-md-12">
          <Link to="quiz"> <Video /> </Link>
        </div>
        <div className="col-lg-4 col-md-12">
          <Link to="quiz"><Video /></Link> 
        </div>
      </div>
    </div>
  );
}
