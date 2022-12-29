import Item1 from '../../images/cpu-01.png';
import Item2 from '../../images/keyboard-01.png';
import Item3 from '../../images/monitor-01.png';
import Item4 from '../../images/mouse-01.png';
import Item5 from '../../images/ups.jpg';

import { ADD_TO_CART,ADD_ACTIVE_ITEM ,REMOVE_ACTIVE_ITEM,UPDATE_FINAL_ITEMS} from '../actions/action-types/cart-actions.js'


const initState = {
    items: [
        {id:1,title:'CPU', img:Item1,category: 'wip'},
        {id:2,title:'Monitor', img: Item3, category: 'wip'},
        {id:3,title:'UPS', img: Item5 , category : 'wip'},
        {id:4,title:'Keyboard', img: Item2,category: 'wip'},
        {id:5,title:'Mouse', img:Item4 , category : 'wip'},
    ],
    activeItems: [],
    addedItems:[],
    finalItems:[],
    totalActive: 0
}
const cartReducer= (state = initState,action)=>{

    if(action.type === ADD_TO_CART){
        return{
            ...state,
            activeItems: state.activeItems,
            addedItems: state.activeItems,
            totalActive: state.activeItems.length,
            finalItems : state.finalItems
        }  
    }
    if(action.type === ADD_ACTIVE_ITEM){
        let currentItem = state.items.find(item => item.id === action.id);
        let existsInActiveItems = state.activeItems.find(item=> item.id === action.id);
        if(existsInActiveItems){
            return{
                ...state,
                activeItems: [...state.activeItems],
                addedItems:[...state.addedItems],
                totalActive: state.activeItems.length,
                finalItems : state.finalItems
            }
        }
        else{
            return {
                ...state,
                activeItems: [...state.activeItems,currentItem],
                addedItems: [...state.addedItems],
                totalActive: state.activeItems.length + 1,
                finalItems : state.finalItems
            }
        }
    
    }
    if(action.type === REMOVE_ACTIVE_ITEM){
      
        let newActiveItems = state.activeItems.filter(item => item.id === action.id)
        return{
            ...state,
            activeItems: newActiveItems,
            addedItems:[...state.addedItems],
            totalActive: newActiveItems.length + 1,
            finalItems : state.finalItems
        }
    }
    if(action.type === UPDATE_FINAL_ITEMS) {
        console.log(action)
        return{
            ...state,
            activeItems: state.activeItems,
            addedItems:[...state.addedItems],
            totalActive: state.activeItems.length ,
            finalItems : action.items
        }
    }

    
 
    
  else{
    return state;
    }
    
}

export default cartReducer