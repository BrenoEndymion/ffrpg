import { createStore } from 'redux';

const USER = {
    data:[
        'vai',
    ],
}

function users(state = USER, action){
    switch(action.type){
        case 'ADD_USER' :
            //console.log(action.user);
            return { data: action.user }
        default:
            return state;
    }
}

const store = createStore(users); 

export default store;   