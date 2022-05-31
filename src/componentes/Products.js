import react from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Product from "./Product";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import Product5 from "./Product5";
import Banner from './Banner';
import Mapa from "./Mapa";
import Titulo from './Titulo';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));



export default function ResponsiveGrid()  {

  return (
      
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center"  >
        
        
        
        <Grid item xs={0}>
          <Box border={0}item xs={6} md={8}>
          <Banner/>
          </Box>
        </Grid>
        <Grid item xs={2} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
          <Box border={0}>
            <Item>
                  Cervecería
                  ▪️ Recarga de botellones de 1 y 2 litros
                  ▪️ Botellas de 1 litro
                  ▪️ Latas
                  🔸Atención de Martes a Sábados de 18:00 a 00:00hs.
                  🔸Obispo Oro 428 - Nva Cba </Item>
          </Box>
          
        </Grid>
        <Grid item xs={2}>
          <Box border={0}>
            <Mapa/>
          </Box>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} ></Grid>
        <Grid item xs={2}  columns={{ xs: 4, sm: 8, md: 12 }}>
          <Box border={0}>
            <Product2/>
          </Box>
        </Grid>
        
        <Grid item xs={2}>
          <Box border={0}>
            <Product3/>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box border={0}>
            <Product4/>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box border={0}>
            <Product/>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box border={0}>
            <Product5/>
          </Box>
        </Grid>
        
        
        
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 } } justifyContent="center" ></Grid>
        
        <Grid item xs={2}>
          <Box border={0}>
          
          </Box>
        </Grid>
       </Grid> 
    
  )
}
