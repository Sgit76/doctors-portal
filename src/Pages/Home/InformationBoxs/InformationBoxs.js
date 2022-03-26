import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography ,Container } from '@mui/material';
import InfoBox from '../InfoBox/InfoBox';

const informations = [
    {
      name:'Opening Hours',
      description: '9am to 8pm',
    },
    {
      name:'Visiting Our Location',
      description: '142 , Kazi nozrul',
    
    },
    {
      name:'Contact us now',
      description: '1614616',
    },
  ]


const InformationBox = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography sx={{fontWeight: 500, m:2 ,color: '#5ce7ed'}} variant="h6" component="div">
              
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              informations.map(info=><InfoBox
              key={info.name}
              info={info}
              ></InfoBox>)
            }
          </Grid>
        </Container>
      </Box>
    );
};

export default InformationBox;