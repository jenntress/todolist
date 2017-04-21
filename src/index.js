var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')

require('./index.css');


function Spinner() {
    return (
        <div>
            <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

function TodosList(props){
  return (
  <div>
      <ul>
      { props.todos.map(function(item){
          return <li> {item.text}</li>
        })}
      </ul>
   </div>
  )
}



var App = createReactClass({
  getInitialState: function(){
    return {
      todos: null,
      newTodoText: null
    }
  },
  componentDidMount: function(){
    var data = [
       {text: 'clean room'},
       {text: 'walk dog'},
       {text: 'wash dishes'},
       {text: 'make bed'},
       {text: 'water plants'},
    ];

    var self = this;
     setTimeout(function(){
       self.setState({ todos: data })
     }, 3000);
   },
   updateTodoText: function(event){
     this.setState({ newTodoText: event.target.value })
   },
   submitTodo: function(event) {
     event.preventDefault();
     var todo = { text: this.state.newTodoText }
     this.setState({ todos: this.state.todos.concat([todo]), newTodoText: '' })

   },
  render: function(){
     return (
    <div className="Jumbotron">
        <h1 className="header">Short ToDo List with a Long Title to Taste the Rainbow</h1>
         { this.state.todos ?
         <TodosList todos={ this.state.todos } /> : <Spinner />
         }
        <form onSubmit={this.submitTodo}>
          <input placeholder="new todo text" onChange={ this.updateTodoText } value={this.state.newTodoText} />
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
     </div>
    )
  }
})



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
