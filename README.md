REACT 学习实例

包含
1. todolist
2. 生命周期,类型验证propTypes，默认值defaultProps
3. css-transition(// https://reactcommunity.org/react-transition-group/css-transition
//多动画
//https://reactcommunity.org/react-transition-group/transition-group)
4. antd
5. redux




redux 学习 业务组件参考 antd-todolist.js

1. 建立store/index.js

2. 建立reducer.js reducer 是管理state的属性的方法。要先深拷贝，不可直接更改state

3. 在业务组件中this.state = store.getState() 给state赋值store 中的数据

4. store.subscribe(this.handleStoreChange) 订阅store中的变化更改state
    handleStoreChange() {
        this.setState(store.getState())
    }

5. dispatch告诉reducer如何更改store

6. store.subscribe 后 this.setState(store.getState())修改当前页面的state


後期使用actionTypes/actionCreator.js 统一管理   type/action

异步请求：

一、redux-thunk
1.安裝redux-thunk，配置index.js 使之可以使用thunk和谷歌开发者工具redux两个中间件加上原来有的reducer

2.因为用了thunk actionCreateor.js 里就可以写返回异步函数的action,异步函数有个参数dispatch 可以直接去请求reducer

二、redux-saga
1. 安装redux-saga,配置index.js,通过运行 sagaMiddleware.run(saga) 这样你在./store/saga.JS中写的方法会自动被执行

2. store/saga.js 里通过takeEvery观察 哪个action.type被推过来了 执行对应的函数