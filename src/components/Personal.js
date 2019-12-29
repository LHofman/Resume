import React from "react";
import "../App.css";
import { Grid, Icon, Card, Image } from "semantic-ui-react";
import image from "../resources/images/Me.jpg";
import getLink from "../util/getLink";

import dataFile from "../resources/Data.json";
const data = dataFile.personal;

export default () => (
  <Grid.Row>
    <h2>
      <Card>
        <Image src={image} />
        <Card.Content>
          <Card.Header>
            <h2><Icon name="user circle" /> {data.name}</h2>
          </Card.Header>
        </Card.Content>
        <Card.Content className="black">
        {data.info.map(info => (
          <p>
            <b>{info.field}</b><br/>
            {info.value}
          </p>
        ))}
        <br/>
        <Grid>
          {data.links.map(link => (
            <span style={{marginBottom: "0.5em"}}>
              {getLink(link.name, link.link)}
            </span>
          ))}
        </Grid>
        </Card.Content>
      </Card>
    </h2>
  </Grid.Row>
);