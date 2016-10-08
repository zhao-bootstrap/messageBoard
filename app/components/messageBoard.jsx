// 留言板
import React from 'react';
import CommentList from '../components/commentList.jsx';
import commentForm from '../components/commentForm.jsx';
const data=[{
	name:'小华',
	message:'你好'
},{
	name:'小华2',
	message:'你好2'
},{
	name:'小华3',
	message:'你好3'
}]
export default class MessageBoard extends React.Component{
	constructor(props){
		super(props);
		 this.state={'data':[]};
		this.componentDidMount=this.componentDidMount.bind(this);
		this.handleMessageSubmit=this.handleMessageSubmit.bind(this);
	}
	componentDidMount(){
		this.setState({data:data})

	}
	handleMessageSubmit(){
		data.push(message);
		this.setState({
			data:data
		})
	}
	render(){
		return (
			<div className="massageBoard">
				<h3>{this.props.title}</h3>
				 <CommentList data={this.state.data}  />
 <commentForm onMessageSubmit={this.handleMessageSubmit}/>
			</div>
		)
	}
}
