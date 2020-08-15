import React from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';
import { Grid } from '@material-ui/core';
import CardList from '../Constant';

const Content = () => {

   const getCardList = (CardListObj) => {
      return <SimpleCard {...CardListObj}/>
   }
return(
   <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
         {CardList.map(CardListObj => getCardList(CardListObj))}
      </Grid>
   </Grid>
   
)
}

export default Content