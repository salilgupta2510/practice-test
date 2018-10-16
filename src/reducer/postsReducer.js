import initialState from './initialState'
import {ADD_POST} from '../actions/actionTypes'

export default function posts(state= initialState.posts, action){
  switch(action.type){
   case ADD_POST:
    return state = action.payload
   default:
    return state;

  }
}