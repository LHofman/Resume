import React, { Component } from "react";
import "../App.css";
import {Grid, Icon} from "semantic-ui-react";

import getRating from "../util/getRating";

export default class extends Component{
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Grid.Row>
        <h2>
          <Icon name={this.props.icon} />
          {this.props.title}
        </h2>
        <ul>
          {this.props.data.map(item => (
            <div key={item.name}>
              <li>
                {item.name} 
                {
                  item.rating &&
                  getRating(item.rating)
                }
              </li>
              {
                item.description &&
                <i>{item.description}</i>
              }
            </div>
          ))}
        </ul>
      </Grid.Row>
    )
  }
}