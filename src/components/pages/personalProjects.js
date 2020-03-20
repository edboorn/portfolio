import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


export default function PersonalProjects() {
  return (
    <div className="pageRoot">
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
                subheader="September 14, 2016"
              />
              <CardMedia image="src/me.jpg" title="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the description of my project, who knows what it
                  might be
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
                title="Nasa Explorer"
                subheader="September 14, 2016"
              />
              <CardMedia image="src/me.jpg" title="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the description of my project, who knows what it
                  might be
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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
                subheader="September 14, 2016"
              />
              <CardMedia image="src/me.jpg" title="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the description of my project, who knows what it
                  might be
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
                title="Nasa Explorer"
                subheader="September 14, 2016"
              />
              <CardMedia image="src/me.jpg" title="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This will be the description of my project, who knows what it
                  might be
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
