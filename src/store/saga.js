//https://github.com/redux-saga/redux-saga
import axios from 'axios'
import { takeEvery,put } from 'redux-saga/effects'
import {
    GET_INIT_LIST,INIT_LIST_ACTION
} from './actionTypes'

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

function* getInitList() {
    try{
        const res = yield axios.get('http://localhost:4000/api/todolist');
        const action =  {
            type:INIT_LIST_ACTION,
            data:res.data
        };
        //相当于store.dispatch
        yield put(action)
    }catch(e) {
        console.log(e)
    }
}
  
export default mySaga;