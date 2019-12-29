import React from 'react';
import { Rating } from "semantic-ui-react";


export default rating => (
  <Rating
    style={{ float: "right" }}
    defaultRating={rating}
    maxRating={5}
    disabled
  />
);