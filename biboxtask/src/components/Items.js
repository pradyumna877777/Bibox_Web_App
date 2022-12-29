import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart , addActiveItem ,removeActiveItem} from '../redux/actions/cartActions'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

import {Link} from 'react-router-dom';

class Items extends Component{

    handleCheck = (id)=>{
        this.props.addActiveItem(id); 
    }
    handleUnCheck = (id)=>{
        this.props.removeActiveItem(id); 
    }
    handleCart = () => {
        if(this.props.totalActive === 3 || this.props.totalActive === 5){
            this.props.addToCart();  
        }
        else{
            window.alert("Please Select either 3 or all")
        }
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <Card sx={{ maxWidth: 400 }} key={item.id}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.img}
                    alt="Computer"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {item.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Checkbox 
                    color="success"  
                    onChange={e => {
                    if(e.target.checked){
                        this.handleCheck(item.id)
                    }
                    else{
                        this.handleUnCheck(item.id)
                    }
                    }}
                    />
                  </CardActions>
                </Card>
            )
        })

        return(
            <div className="container">
                <h3 className="center">Items</h3>
                <div className="box">
                    <center>               
                        {itemList}
                        <br /><br />
                        <Box sx={{ '& button': { m: 1 } }}>
                            <Button onClick={() => this.handleCart()} variant="contained" color="success" size="large">
                                Add to Cart
                            </Button>
                            <Button component={Link} to="/dnd" variant="outlined" color="error" size="large">
                                Assemble
                            </Button>
                        </Box>
                    </center>
                    <br /><br />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items,
      totalActive : state.totalActive
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: ()=>{dispatch(addToCart())},
        addActiveItem : (id)=>{dispatch(addActiveItem(id))},
        removeActiveItem : (id)=>{dispatch(removeActiveItem(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Items)