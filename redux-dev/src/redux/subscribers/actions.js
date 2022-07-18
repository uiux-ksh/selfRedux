import {ADD_SUBSCRIBER,REMOVE_SUBSCRIBER,CHANGECOLOR} from "./type";

export const addSubscriber = () => {
    return{
        type: ADD_SUBSCRIBER
    }
}

export const removeSubscriber = () => {
    return{
        type: REMOVE_SUBSCRIBER
    }
}

export const changeColor = () => {
    return{
        type:CHANGECOLOR
    }
}