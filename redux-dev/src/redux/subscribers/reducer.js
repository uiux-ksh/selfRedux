import {ADD_SUBSCRIBER,REMOVE_SUBSCRIBER,CHANGECOLOR} from "./type";

const initialState = {
    count: 370,
    color:'red'
}
const subscribersReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_SUBSCRIBER:
            return {...state,count:state.count +1 }
        case REMOVE_SUBSCRIBER:
            return  {...state, count:state.count -1}
        case CHANGECOLOR:
            return {...state,color:state.color = 'blue'}
       default:return state;
    }
}
export default subscribersReducer;