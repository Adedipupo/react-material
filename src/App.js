import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core'


function App() {
  return (
    <Grid container direction="column">
      <Grid item>Navigation</Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          ContentContentContent
          ContentContentContent
                    ContentContentContent
          ContentContentContent
                    ContentContentContent
          ContentContentContent
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
