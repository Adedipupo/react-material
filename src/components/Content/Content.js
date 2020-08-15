import React from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';
import { Grid } from '@material-ui/core';

const Content = () => {
return(
   <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
         <SimpleCard 
           title="Hamilton Beach"
           subtitle="89.99"
           avatarSrc="/static/Images/avatar/1.jpg"
           imgSrc="https://cdn.britannica.com/98/100098-050-CFA01318/Beach-Malibu-Calif.jpg" 
            description="well meaning and kind a benevolent smile"
           />
      </Grid>
   </Grid>
   
)
}

export default Content