import React , {Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        const {item,test} = this.props
        return (          
            
            <div onClick={this.handleClick}>
               {test} - {item}
            </div>
        )
    }
    //性能优化，如果 props接受到 content改变了 才让子组件渲染
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true
        }
        return false;
    }
    //当一个组件从父组件接受了参数，只要父组件的render函数重新执行这个生命周期函数才执行
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('父组件的render重新执行了，componentWillReceiveProps')
    }
    //点todolist 的ul 后删除这个组件 组件被删除时候执行
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handleClick() {
        const {handleDel,index} = this.props
        handleDel(index)
    }
}
//传值检测 https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    item:PropTypes.string,
    handleDel:PropTypes.func,
    index:PropTypes.number
}
//默认值
TodoItem.defaultProps = {
    test: 'wb'
}

export default TodoItem