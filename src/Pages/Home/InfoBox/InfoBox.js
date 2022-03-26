import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const InfoBox = (props) => {
    const {name, description} = props.info;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 250 , border: 0 , boxShadow: 0 , backgroundColor:'secondary.main' , color:'white' , mt:-5}}>
                <CardContent>
                    <Typography variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="white">
                    {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default InfoBox;