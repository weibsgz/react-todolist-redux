import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

//redux devtools 谷歌开发者工具
// redux-thunk中间件使用
//https://github.com/zalmoxisus/redux-devtools-extension  1.2 Advanced store setup
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

// redux-saga 中间件使用
// const sagaMiddleware = createSagaMiddleware()
// const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//          applyMiddleware(sagaMiddleware)
//       );

const store = createStore(
    reducer,
    enhancer
);
// sagaMiddleware.run(saga)

export default store