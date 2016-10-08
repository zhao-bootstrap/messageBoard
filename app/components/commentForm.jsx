// 评论区
import React from 'react';
export default class CommentForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			"name":'',
			"message":''
		};
		this.handleNameChange=this.handleNameChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);


	}
	handleNameChange(e){
		this.setState({"name":e.target.value})
	}
	handleSubmit(e){
		e.preventDefault();
		const name =this.state.name.trim();
		const message=this.state.message.trim();
		if(!name||!message){
			return;
		}
		this.props.onMessageSubmit({
			name:name,
			message:message
		})
		this.setState({
			name:'',
			message:''
		})
	}
	componentDidMount(){

	}
	render(){
		return (
			 <div className="row">
                      <form className="messageForm"
                            onSubmit={this.handleSubmit}>
                          <input
                          type="text"
                          placeholder="Your name"
                          value={this.state.name}
                          onChange={this.handleNameChange}
                          id="textName"
                          className="form-control"/>
                          <input
                              type="text"
                              placeholder="Say something..."
                              value={this.state.message}
                              onChange={this.handleMessageChange}
                              id="textMessage"
                              className="form-control"/>
                          <input
                              type="submit"
                              className="btn btn-default"
                              value="Leave a message"/>
                      </form>
                  </div>
		)
	}

}