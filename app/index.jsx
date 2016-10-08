//留言板
import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
/*// import '../node_modules/bootstrap/scss/bootstrap.scss';

//
// import MessageBoard from './components/messageBoard.jsx'
// import Search from './components/search';
// import Plist from './components/plist';
 //
*/

import MessageBoard from './components/messageBoard';
const useListDiv=document.createElement('div');
document.body.appendChild(useListDiv);
class BindingExample extends React.Component{
	constructor(props){
		 super(props);
		 this.state={
		 	text:''
		 }
		 this.handleChange=this.handleChange.bind(this);
	}
	/*getInitialState(){
		return{
			text:''
		}
	}*/
	handleChange(event){
		this.setState({text:event.target.value})
	}
	render(){
		return(
			<div>
				<input type="text" placeholder="请输入内容" onChange={this.handleChange}/>
				<p>{this.state.text}</p>
			</div>
		)
	}
}
// ReactDOM.render(<MessageBoard title="留言板"/>,useListDiv);
 ReactDOM.render(<BindingExample />,useListDiv);


