import React , {Component,Fragment} from 'react';

import './style.css'
import TodoItem from './TodoItem'
import AntdTodo from './antd-todolist'
import App from './App'


import axios from 'axios'
export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVal:'',
      list:[]
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleBtn = this.handleBtn.bind(this)
    this.handleDel = this.handleDel.bind(this);
  }

  //当组件的state或者props重新改变的时候 render函数就会执行
  //当父组件的render函数被重新运行，他的子组件的render函数都会被重新运行。
  render() {
    console.log('render')
    return (
        // label的 for 要改成 htmlFor
        <Fragment>
          <label htmlFor="inputItem">todolist </label>
          <input className="input" id="inputItem"
                 value={this.state.inputVal}
                 onChange={this.handleInput}
                 ref = {(input)=>{this.input = input}}
          ></input>
          <button onClick={this.handleBtn}>提交</button>
          <ul>
               {/* <li key={index} 
                       onClick={this.handleDel.bind(this,index)}
                       dangerouslySetInnerHTML = {{__html:item}}
                   >               
                   </li> 
                */}
            {this.getTodoItem()}
          </ul>
          <App></App>
          <br /><br /><br />
          <AntdTodo></AntdTodo>
        </Fragment>       
    )
  }
  //ajax放这里
  componentDidMount() {
     console.log('componentDidMount')
     axios.get('http://localhost:4000/api/todolist').then(res=>{
       this.setState({
         list:res.data
       })
     })
  }
  //props state改变后会被调用 返回true代表需要render重新运行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true;
  }
  //shouldComponentUpdate之后如果返回true才执行
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
  }
  //shouldComponentUpdate之后如果返回true才执行
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }
 

  getTodoItem() {
    //key值不要用index.因爲虚拟DOM的比对 是先拷贝一份自己 用key值来做对应关系
    //这时候比如你删掉一个元素 比如依次输入a,b,c   a：0，b:1,c:2
    // 删掉了元素a 就变为 b:0 ,c:1 这样就增加了对应查找的成本。
    return this.state.list.map((item,index)=>{
      return (
        <
         TodoItem item={item} 
         key={item} 
         index={index}
         handleDel={this.handleDel}
         />                
       )
    })
  }


  handleInput(e) {
    console.log(e.target.value)

    this.setState({
      //inputVal:e.target.value
      //this.input 用ref
      inputVal:this.input.value
    })    
  }
  handleBtn() {

    // prevState 代表上次的状态
     this.setState((prevState)=>{
       return {
        list:[...prevState.list,prevState.inputVal],
        inputVal:''
       }
     },()=>{
       console.log('setState函数第二个函数可以等第一个函数执行完毕后执行')
     })
    //es6 如果不写return 可以整体包一个括号
    //  this.setState((prevState)=>({
    //     list:[...prevState.list,prevState.inputVal],
    //     inputVal:''
    //  }))
  }

  handleDel(index) {   
     this.setState(prevState=>{
      const list = [...prevState.list];
      list.splice(index,1)
      return {
         list
       }
     })
  }
}