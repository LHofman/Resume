import React from "react";
import "./App.css";
import {Container, Grid} from "semantic-ui-react";

import IconWithText from "./components/IconWithText";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import List from "./components/List";

import data from "./resources/Data.json";

export default () => (
  <Container className="marginTop">
    <Grid>
      <Grid.Column style={{ width: "30%", minWidth: "250px" }}>
        <Personal/>
      </Grid.Column>
      <Grid.Column style={{ width: "35%", minWidth: "250px" }}>
        <Experience/>
        <hr />
        <Education/>
      </Grid.Column>
      <Grid.Column style={{ width: "35%", minWidth: "300px" }}>
        <List icon="chain" title="Skills" data={data.skills}/>
        <hr />
        <List icon="flag" title="Languages" data={data.languages}/>
        <hr />
        <List icon="tv" title="Interests" data={data.interests}/>
        {data.others.map(item => (
          <div>
            <hr />
            <IconWithText item={item}/>
          </div>
        ))}
      </Grid.Column>
    </Grid>
  </Container>
);
