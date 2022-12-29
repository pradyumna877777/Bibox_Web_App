import React, { Component } from 'react';
import "./dnd.css";
import { connect } from 'react-redux';
import {updateFinalItems} from '../redux/actions/cartActions';

import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

class DragDrop extends Component {
    state = {
        tasks: this.props.addedItems
    }

    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
   
       let tasks = this.state.tasks.filter((task) => {
           if ((task.id).toString() === id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    handleFinalItems = (items) => {
        console.log("Final Items");
        console.log(items);
        this.props.updateFinalItems(items);
    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        }
        var allitems = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.id} 
                    onDragStart = {(e) => this.onDragStart(e, t.id)}
                    draggable
                    className="draggable"
                >
                <center>
                <img src={t.img} alt="" width="150px" height="100px"/>
                </center>
                </div>
            );
            allitems[t.category].push(t);
        });
        return (
            <div className="container-drag">
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip"); this.handleFinalItems(allitems.complete)}}>
                    <span className="task-header">ITEMS</span>
                    {tasks.wip}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "complete"); this.handleFinalItems(allitems.complete)}}>
                     <span className="task-header">FINAL PRODUCT ITEMS</span>
                     {tasks.complete}
                </div>
                <Button component={Link} to="/finalProduct" variant="contained" color="primary" size="large">Get Final Product</Button>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items,
      addedItems : state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        updateFinalItems : (finalitems)=>{dispatch(updateFinalItems(finalitems))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DragDrop)