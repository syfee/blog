var Todo = React.createClass({
  handleNewTodo: function(todo){
    this.props.todoList.push(todo);
  },
  render: function() {
    return (
      < div >
        <New />
        <list todoList={this.props.todoList}/>
      < /div>
    )
  }
});

var todoList = [
  {done: false,content: 'react to'},
  {done: false,content: 'build blog'}
]

React.render(<Todo todoList={todoList} />, document.body);