import React from 'react';
import { Grid } from '@material-ui/core'
import Header from './components/Header/Header';


function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
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
