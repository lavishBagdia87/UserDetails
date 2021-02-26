import axios from 'axios';

export const actions = {
    LOADING:"LOADING",
    SAVE_USER:"SAVE_USER",
    GET_USER:"GET_USER"
}

export function connectToServer(action,url,methodType,param){
    return (dispatch) =>{
        dispatch(isLoading(true))
        if(methodType === 'get'){
            getServiceCall(dispatch,action,process.env.API_URL+url,param)
        }else if (methodType === 'post'){
            postServiceCall(dispatch,action,process.env.API_URL+url,param)
        }else{
            dispatch(isLoading(false));   
        }
    }
}


const getAxios= ()=>{
    return axios.create({
        headers:{
            'Accept':'*/*',
            'Content-Type':'application/json'
        }
    });
}
const getServiceCall = (dispatch,action,url)=>{
    getAxios().get(url).then((resp)=>{
        dispatch(isLoading(false));
        if(resp.status === 200){
            dispatch(setDataAction(action,resp.data))
        }
    }).catch((e)=>{
        dispatch(isLoading(false));
        dispatch(setDataAction(action))
    })
}

const postServiceCall = (dispatch,action,url,param)=>{
    getAxios().post(url,param).then((resp)=>{
        dispatch(isLoading(false));
        if(resp.status === 201){
            dispatch(setDataAction(action,resp.data))
        }
    })
}

const setDataAction = (action,data) =>{
    return {
        type:action,
        data:data?data:null 
    }
} 
const isLoading = (status)=>{
    return {
        type:actions.LOADING,
        data:status
    }
}