import React, { Component } from "react";
import "../App.css";
import {Grid, Icon} from "semantic-ui-react";

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Row>
        <h2>
          <Icon name={this.props.item.icon} />
          {this.props.item.text}
        </h2>
      </Grid.Row>
    )
  }
}