import React from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';
import { Grid } from '@material-ui/core';
import CardList from '../Constant';

const Content = () => {

   const getCardList = (CardListObj) => {
      return (
         <Grid item xs={12} sm={4}>
          <SimpleCard {...CardListObj} />
          </Grid>
      )
   }
return(
   <Grid container spacing={2}>

         {CardList.map(CardListObj => getCardList(CardListObj))}
  
   </Grid>
   
)
}

export default Content