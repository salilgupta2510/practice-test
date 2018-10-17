//import initialState from './initialState'
import {ADD_POST} from '../actions/actionTypes'

export default function posts(state= [], action){
  
  switch(action.type){
   case ADD_POST:
   console.log("a1:...", state)
  //  let newState = {name: action.payload.a,
  //   title: action.payload.b,
  //   data: action.payload.c}
  //   console.log("a2:...", newState)
    return {
      ...state,
      ...action.payload
    }
   
   default:
   console.log("initial:...", state)
    return state;
  }
}