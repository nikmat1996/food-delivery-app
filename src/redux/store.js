import reducer from './reducer';
import { createStore } from 'redux';


const store  = createStore(reducer)

store.subscribe(()=>saveData('state',store.getState()))

function saveData(key, data){
    localStorage.setItem(key,JSON.stringify(data))
}

export default store