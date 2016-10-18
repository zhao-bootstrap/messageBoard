var React=require('react');
var ReactDom=require('react-dom');
var MessageBoard=require('../components/messageBoard.js');

ReactDom.render(<MessageBoard title="留言板"/>,
	document.getElementById("container")
);
