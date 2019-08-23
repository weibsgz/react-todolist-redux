import React , {Component,Fragment} from 'react';
import { Input ,Button ,List } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import store from './store/index'
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction, 
    getTodoLit,
    getSagaInitList
} from './store/actionCreator'



class AntdTodo extends Component {
    constructor(props) {
        super(props)
        //store.getState() store的默認方法，調取數據       
        this.state = store.getState()
        this.handleInput = this.handleInput.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)

        //订阅 每次store变化都会触发
         store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <Fragment> 
                <div>
                用antd + redux <br></br>
                <Input value={this.state.inputValue} 
                       style={{width:'200px',marginRight:'10px'}}
                       onChange={this.handleInput}
                >
                </Input>
                <Button type="primary" onClick={this.handleBtnClick}>
                提交
                </Button>
                </div>
                <List  style={{width:'300px',marginTop:'10px'}} bordered 
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleItemClick.bind(this,index)}>{item}</List.Item>)}
                 />
            </Fragment>
           
        )
    }
    componentDidMount() {
        //用了  redux-thunk 这里直接调用 因为走的接口异步函数渲染列表
        const action = getTodoLit()
        store.dispatch(action)


        //redux-saga写法 action得到get_init_list这个type,
        //store/index.js里观察 所有的store/saga.js里的方法通过takeEvery
        //调用每个字符串常量对应的函数
        // const action = getSagaInitList()
        // store.dispatch(action)
        // console.log(action)
    }
    handleInput(e) {
        // const action = {
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // } 
        const action = getInputChangeAction(e.target.value);

        store.dispatch(action)
        console.log(store.getState())
    }
    //只要STORE改变了store.subscribe监听这个方法 就给改变state了
    handleStoreChange() {
        this.setState(store.getState())
    }

    handleBtnClick() {
        // const action = {
        //     type:ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action)
        console.log(store.getState())
    }

    handleItemClick(index) {
        // const action = {
        //     type:DELECT_ITEM,
        //     index:index
        // }
        const action = getDeleteItemAction(index)
        store.dispatch(action);
        console.log(store.getState())
    }
}

export default AntdTodo