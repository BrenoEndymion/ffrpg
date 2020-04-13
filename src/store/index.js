import { createStore } from 'redux';

const USER = {
    data:[
        'vai',
    ],
    heroData: [
        'outro'
    ],
    atriData:[
        'vai',
    ],
    esseData: [
        [0,0,0,0,0,0,0,0,false]
    ],
    periData:[
        'vai',
    ],
    equipData:[
        'vai',
    ],
    equip2Data:[
        'vai',
    ],
    equip3Data:[
        'vai',
    ],
    equip4Data:[
        'vai',
    ],
    equip5Data:[
        'vai',
    ],
    equip6Data:[
        'vai',
    ],
    equip7Data:[
        'vai',
    ],
    equip8Data:[
        'vai',
    ],
    inveData: [
        'outro'
    ],
    skillData:[
        'vai',
    ],
    MagiData: [
        'outro'
    ],
    backData: [
        'outro'
    ],
    anotData: [
        'outro'
    ],
}

function users(state = USER, action){
    switch(action.type){
        case 'ADD_USER' :
            //console.log(action.user);
            return { ...state, data: action.user }
        case 'ADD_HERO' :
            return { ...state, heroData: action.hero } 
        case 'ADD_ATRI' :
            return { ...state, atriData: action.hero } 
        case 'ADD_ESSE' :
            return { ...state, esseData: action.hero } 
        case 'ADD_PERI' :
            return { ...state, periData: action.hero } 
        case 'ADD_EQUIP' :
            return { ...state, equipData: action.hero } 
        case 'ADD_EQUIP2' :
            return { ...state, equip2Data: action.hero } 
        case 'ADD_EQUIP3' :
            return { ...state, equip3Data: action.hero } 
        case 'ADD_EQUIP4' :
            return { ...state, equip4Data: action.hero } 
        case 'ADD_EQUIP5' :
            return { ...state, equip5Data: action.hero } 
        case 'ADD_EQUIP6' :
            return { ...state, equip6Data: action.hero } 
        case 'ADD_EQUIP7' :
            return { ...state, equip7Data: action.hero } 
        case 'ADD_EQUIP8' :
            return { ...state, equip8Data: action.hero } 
        case 'ADD_INVE' :
            return { ...state, inveData: action.hero } 
        case 'ADD_SKILL' :
            return { ...state, skillData: action.hero } 
        case 'ADD_MAGI' :
            return { ...state, magiData: action.hero } 
        case 'ADD_BACK' :
            return { ...state, backData: action.hero } 
        case 'ADD_ANOT' :
            return { ...state, anotData: action.hero } 

        default:
            return state;
    }
}

const store = createStore(users); 

export default store;   