import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color:"black"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardTotalCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" >
         <CardHeader title="PRICE DETAILS" style={{backgroundColor:"#F9C74F",height:"50px", textAlign:"center"}}/>
      <CardContent >
     
      <CardActions style={{color:"black"}}>
        <Typography size="small" style={{color:"black"}}>
        Price ( 10 items )
        </Typography>
        <Typography size="small"  style={{marginLeft:"auto",color:"black"}}>
          5000/-
        </Typography>
      </CardActions>
      <CardActions>
        <Typography size="small" style={{color:"black"}}>
        Discount
        </Typography>
        <Typography size="small"  style={{marginLeft:"auto",color:"black"}}>
          2000/-
        </Typography>
      </CardActions>
      <CardActions>
        <Typography size="small" style={{color:"black"}}>
        Price ( 10 items )
        </Typography>
        <Typography size="small"  style={{marginLeft:"auto",color:"black"}}>
          5000/-
        </Typography>
      </CardActions>
      <CardActions style={{color:"black"}}>
        <Typography size="small" style={{color:"black"}} >
        Delivery charges
        </Typography>
        <Typography size="small"  style={{marginLeft:"auto",color:"black"}}>
          2,00/-
        </Typography>
      </CardActions>
      
      <CardActions style={{boxShadow: "1px 1px 0 2px  gray"}}>
        <Typography size="small" style={{color:"black"}} >
       <b>Total amount</b> 
        </Typography>
        <Typography size="small"  style={{marginLeft:"auto",color:"black"}}>
        <b>  5,200/-</b> 
        </Typography>
      </CardActions>
      </CardContent>
    </Card>
  );
}