import React from "react";
import "../App.css";
import { Grid, Icon, Feed} from "semantic-ui-react";
import getBulletIcon from "../util/getBulletIcon";
import getLink from "../util/getLink";

import dataFile from "../resources/Data.json";
const data = dataFile.experience;

export default () => (
  <Grid.Row>
    <h2>
      <Icon name="travel" />
      Experience
    </h2>
    <Feed>
      {data.map(exp => (
        <Feed.Event
          key={exp.key}
          icon={getBulletIcon()}
          date={exp.date}
          summary={
            <p>
              <b>{exp.position}</b> @{" "}
              {getLink(exp.company.name, exp.company.link)}
            </p>
          }
          extraText={
            <div>
              <i>{exp.summary}</i>
              <ul>
                {exp.technologies.map(tech => (
                  <li key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          }
        />
      ))}
    </Feed>
  </Grid.Row>
);