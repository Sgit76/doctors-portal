import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Service from '../../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import { Container } from '@mui/material';
const services = [
  {
    name: 'Fluoride Treatment',
    description: 'Dentists provide professional fluoride treatments in the form of a highly concentrated rinse, foam, gel, or varnish. ',
    img: fluoride
  },
  {
    name: 'Cavity Filling',
    description: 'A filling seals a hole, or cavity, in the tooth, preventing further damage, pain, and infection. for teeth! ',
    img: cavity
  },
  {
    name: 'Teeth whitening',
    description: 'Whitening gels are clear, peroxide-based gels applied with a small brush directly to the surface of your teeth',
    img: whitening
  },
]


const Services = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography sx={{fontWeight: 500, m:2 ,color: '#5ce7ed'}} variant="h6" component="div">
              OUR SERVICE
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              services.map(service=><Service
              key={service.name}
              service={service}
              ></Service>)
            }
          </Grid>
        </Container>
      </Box>
    );
};

export default Services;