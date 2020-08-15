import React from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';
import { Grid } from '@material-ui/core';

const Content = () => {
return(
   <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
         <SimpleCard 
           title={"Hamilton Beach"} 
           subtitle={"89.99"} 
           avatarSrc="/static/Images/avatar/1.jpg"/>
      </Grid>
   </Grid>
   
)
}

export default Content