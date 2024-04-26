import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ForestIcon from '@mui/icons-material/Forest';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MediaCard({ employee }) {
  /*console.log(employee); */
  return (
  
    <>
      {employee.map((item, index) => (
        <Card sx={{ maxWidth: 345, margin: 10, padding: 1 }}>
          <CardMedia
            sx={{ height: 200, backgroundSize: "contain", margin: 1 }}
            image= {`/React_Employee/${item.image}`}
            title="profile"
          />
          <CardContent>
      
            <Typography gutterBottom variant="h5" component="div">
              {employee[0].firstName} {employee[0].lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {employee[0].department}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {employee[0].position}
            </Typography>
          </CardContent>

          <Stack direction="row" spacing={1}>
            <Chip label="Code" />
            <Chip label="Lead" variant="outlined" />
            <Chip label="Design" variant="outlined" />
          </Stack>

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}