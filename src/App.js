import React , {Component,Fragment} from 'react';
// https://reactcommunity.org/react-transition-group/css-transition
//多动画
//https://reactcommunity.org/react-transition-group/transition-group
import { CSSTransition , TransitionGroup} from 'react-transition-group';
import './style.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show:true,
            list:[]
        }
        this.handleToggle = this.handleToggle.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    render() {
        return (
            <Fragment>
                <CSSTransition 
                classNames = "fade"
                in={this.state.show}
                timeout={1000}
                // 动画完毕DOM移除
                unmountOnExit  
                //动画完毕钩子
                onEntered={(el)=>el.style.color='blue'}
                //页面第一次加载 也能有enter的效果需要在CSS里设置fade-appear fade-appear-active
                appear={true}
                >
                    <div>APP组件</div>
                </CSSTransition>

                {/* <div className = {this.state.show ? 'show' : 'hide'}>APP组件</div> */}
                <button onClick={this.handleToggle}>toggle</button>
                
                {/* 多元素动画 就是TransitionGroup 包裹 CSSTransition */}
                <TransitionGroup>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <CSSTransition 
                                classNames = "fade"
                                in={this.state.show}
                                timeout={1000}
                                // 动画完毕DOM移除
                                unmountOnExit  
                                //动画完毕钩子
                                onEntered={(el)=>el.style.color='blue'}
                                //页面第一次加载 也能有enter的效果需要在CSS里设置fade-appear fade-appear-active
                                appear={true}
                                key={index}
                            
                            >
                            <div >{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>

                <button onClick={this.handleAddItem}>多个动画组件添加</button>
            </Fragment>
            
        )
    }

    handleToggle() {
        this.setState({
            show: this.state.show ? false : true
        })
    }

    handleAddItem() {
        this.setState((prevState)=>{
            return {
                list:[...prevState.list,'wb']
            }
        })
    }
}

export default App