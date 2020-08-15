import React from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';
import { Grid } from '@material-ui/core';

const Content = () => {
return(
   <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
         <SimpleCard />
      </Grid>
   </Grid>
   
)
}

export default Content