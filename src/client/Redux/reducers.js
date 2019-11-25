import {combineReducers} from 'redux'

const shopcar = (state = [],action)=>{
    switch(action.type){
    case 'ADD_NUM':
        action.data[action.ind].count +=1;
        return [...state];
        break;
    case 'SUB_NUM':
        action.data[action.ind].count -= 1;
        if(action.data[action.ind].count<=0){
            action.data[action.ind].count = 0;
        }
        return [...state];
        break;
    case 'PROPS_DATA':
        return action.data;
        break;
    default :
        return state
    }
}
const Shopcar = combineReducers({
    data:shopcar,
})
export default Shopcar