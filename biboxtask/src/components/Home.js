import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function RecipeReviewCard() {
  return (
      <center>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={require("../images/computer-allparts-01.png")}
        alt="Computer"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Computer Setup
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to='/items' color="primary">Start</Button>
      </CardActions>
    </Card>
    </center>
  );
}
