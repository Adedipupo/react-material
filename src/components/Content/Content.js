import React from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';
import { Grid } from '@material-ui/core';

const Content = () => {
return(
   <Grid container spacing={2}>
      <Grid item xs={4}>
         <SimpleCard />
      </Grid>
      <Grid item xs={4}>
         <SimpleCard />
      </Grid>
      <Grid item xs={4}>
         <SimpleCard />
      </Grid>
   </Grid>
   
)
}

export default Content