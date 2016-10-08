
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import $ from 'jquery';
/*import Search from './components/search';
import Plist from './components/plist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"keyword": ""};
    this.refreshKeyword = this.refreshKeyword.bind(this);
  }

  refreshKeyword(name) {
    this.setState({"keyword": name});
  }

  render() {
  	const imgStyle = {
      width: '50px'
    }
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 style={imgStyle} className="jumbotron-heading">Search Github Users</h3>
          <Search sendAction={this.refreshKeyword}/>
        </section>

        <Plist keyword={this.state.keyword}/>
      </div>
    );
  }
}
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);*/
class MyComponent extends React.Component{
// var MyComponent = React.createClass
	constructor(props) {
	     super(props);
	    // this.state = {"loading":false, "list": []};
	    this.handleClick=this.handleClick.bind(this);
  	}
  handleClick() {
  	this.refs.myTextInput.focus();

  }
  render() {
  	const imgStyle = {
      width: '50px',
      height:'200px'
    }
    return (
      <div>
        <input style={imgStyle} type="text" ref="myTextInput" />
        <input  style={imgStyle} type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
};
/*
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
  <MyComponent />,app
);*/
// 设置state 获取是否点击
/*class LikeButton extends React.Component{

  constructor(props){
    super(props);
      this.state={"liked":false};
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick (){
    this.setState({liked:!this.state.liked});
  }
  render (){
    const text=this.state.liked?'like':'haven\'t liked';
    return(
       <p onClick={this.handleClick}>
      You {text} this.Click to toggle.</p>
    );
  }
};
const app=document.createElement('div')
document.body.appendChild(app);
ReactDOM.render(<LikeButton />,app);*/
//获取表单改变后的值
class Input extends React.Component{
  constructor(props){
    super(props);
    this.state={"value":"hello!"};
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value})
  }
  render(){
    const value=this.state.value;
    return(
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  };
};

//组件的渲染
class Hello extends React.Component{
  constructor(props){
    super(props);
    this.state={"opacity":1.0}
  }
  componentDidMount(){
    this.timer=setInterval(function(){
      var opacity = this.state.opacity;
      opacity-=0.5;
      if(opacity<0.1){
        opacity=1.0
      }
      this.setState({opacity:opacity});
    }.bind(this),100)
  }
  render(){
    return (
      <div style={{opacity:this.state.opacity}}>
        Hello{this.props.name}
      </div>
    )
  }
}
/*const Hellodiv=document.createElement('div');
document.body.appendChild(Hellodiv);
ReactDOM.render(<Hello />,Hellodiv);*/
//react ajax
class UseGlist extends React.Component{
  constructor(props){
    super(props);
    this.state={
      "username":'',
      "lastGistUrl":''
    }
  }
  componentDidMount (){
    $.get(this.props.source,function(result){
      const lastGist=result[0];
      // if(this.isMounted()){
        this.setState({
          username:lastGist.owner.login,
          lastGistUrl:lastGist.html_url
        })
      // }
    }.bind(this))
  }
  render(){
    return(
      <div>{this.state.username}/s last gist is
        <a href={this.state.lastGistUrl}></a>
      </div>

    )
  }
}
/*const useListDiv=document.createElement('div');
document.body.appendChild(useListDiv);
ReactDOM.render(<UseGlist source="https://api.github.com/users/octocat/gists"/>,useListDiv);
*/

class RepoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      "loading":true,
      "error":null,
      "data": null
    }
  }

  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  }

  render() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo) {
        return (
          <li>
            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
          </li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
};

/*const useListDiv=document.createElement('div');
document.body.appendChild(useListDiv);
ReactDOM.render(
<RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}/>,useListDiv);
*/














