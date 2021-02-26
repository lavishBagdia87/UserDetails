import {actions} from '../actions/userActions';

export default function userReducer(state=[],action){
    switch(action.type){
      case actions.LOADING:
        return Object.assign({},state,{
          loadingStatus:action.data  
        })
      case actions.GET_USER:
        return Object.assign({},state,{
          userList:action.data  
        })
      case actions.SAVE_USER:
        return Object.assign({},state,{
          userId:action.data.id  
        })
      default:
        return state;
    }
}
