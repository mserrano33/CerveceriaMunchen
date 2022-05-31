import react from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Product from "./Product";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";

export default function ResponsiveGrid()  {

  return (
    
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        <Grid item xs={3}>
          <Box border={2}>
            <Banner/>
          </Box>
        </Grid>
       </Grid> 
    
  )
}
