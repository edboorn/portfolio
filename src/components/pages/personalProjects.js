import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


export default function PersonalProjects() {
  return (
    <div>
      <Grid>
        <Grid container spacing={2}>
          <Grid item lg>
            <Card
              style={{
                minWidth: 345,
                maxWidth: 345,
                float: "left",
                margin: "5%"
              }}
            >
              <CardHeader
                title="Nasa Explorer"
                subheader="React, JavaScript"
              />
              <CardMedia image="src/me.jpg" title="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  As a space nut, I decided to build a front end ontop of NASAs comprehensive API system. This will include the viewing of NASA images and (fingers crossed) some satellite mapping
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg>
            <Card
              style={{
                minWidth: 345,
                maxWidth: 345,
                margin: "5%",
                float: "left"
              }}
            >
              <CardHeader
                title="More Comming Soon!"
              />
              <CardMedia image="src/me.jpg" title="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Like this website, my personal projects is a constantly growing list. This will be updated as and when I have something to show
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
