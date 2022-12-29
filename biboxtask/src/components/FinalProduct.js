import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import "./finalProduct.css";

class FinalProduct extends Component {
    render() {
        return (
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columnSpacing={0} rowSpacing={1} justifyContent="center">
                        {this.props.finalItems.map((item) =>{
                           switch(item.id) {
                               case 1 : return (<div className="cpu"><img src={item.img} alt="CPU" /></div>);
                               case 2 : return (<div className="monitor"><img src={item.img} alt="Monitor" /></div>);
                               case 3 : return (<div className="ups"><img src={item.img} alt="UPS" width="300" height="300"  /></div>);
                               case 4 : return (<div className="keyboard"><img src={item.img} alt="Keyboard" /></div>);
                               case 5 : return (<div className="mouse"><img src={item.img} alt="Mouse" /></div>);
                            default : return null;      
                           }
                        })}
                    </Grid>
                </Box>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        finalItems : state.finalItems
    }
}
export default connect(mapStateToProps)(FinalProduct);