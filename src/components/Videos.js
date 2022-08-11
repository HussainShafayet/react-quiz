import React from 'react';
import Video from './Video';

export default function Videos() {
  return (
    <div>
      <div className="row">
        <div class="col-lg-4 col-md-12">
          <Video />
        </div>
        <div class="col-lg-4 col-md-12">
          <Video />
        </div>
        <div class="col-lg-4 col-md-12">
          <Video />
        </div>
      </div>
    </div>
  );
}
