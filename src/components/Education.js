import React from "react";
import "../App.css";
import { Grid, Icon, Feed} from "semantic-ui-react";

import getBulletIcon from "../util/getBulletIcon";

import dataFile from "../resources/Data.json";
const data = dataFile.education;

export default () => (
  <Grid.Row>
    <h2>
      <Icon name="student" />
      Education
    </h2>
    <Feed>
      {data.map(ed => (
        <Feed.Event
          key={ed.key}
          icon={getBulletIcon()}
          date={ed.date}
          summary={ed.school}
          extraText={ed.field}
          style={{marginBottom: "1em"}}
        />
      ))}
    </Feed>
  </Grid.Row>
);