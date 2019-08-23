import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELECT_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes'
import axios from 'axios'
export const getInputChangeAction = value =>{
    return {
        type:CHANGE_INPUT_VALUE,
        value
    }
}

export const getAddItemAction = ()=>{
    return {
        type:ADD_TODO_ITEM
    }
}

export const getDeleteItemAction = (index)=>{
    return {
        type:DELECT_ITEM,
        index:index
    }
}

// export const initListAction = (data)=>{
//     return {
//         type:INIT_LIST_ACTION,
//         data
//     }
// }
//使用redux-thunk 这里就可以返回一个函数
//redux-thunk 获取列表
export const getTodoLit = () =>{
    return (dispatch) =>{
        axios.get('http://localhost:4000/api/todolist').then(res=>{
            const data = res.data;
            const action = {
                type:INIT_LIST_ACTION,
                data
            };
            dispatch(action)
        })
    }
}

//使用redux-saga 获取列表
export const getSagaInitList = ()=>{
    return {
        type:GET_INIT_LIST
    }
}