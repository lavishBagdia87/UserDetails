import {actions} from '../actions/userActions';

export default function userReducer(state=[],action){
    switch(action.type){
        case actions.GET_USER:
            return Object.assign({},state,{
              userList:action.data  
            })
    }
}
