import {createStore} from 'redux';
import rootReducer from '../reducer/rootReducer';


export default function configureStore() {
  return createStore(
    rootReducer
  );
}