import React , {Component } from 'react';
import {TodoCreator} from './TodoCreator';
import {TodoRow} from './TodoRow';
import {TodoBanner} from './TodoBanner';


class App extends Component 
  {
      constructor(props)
      {
        super(props);
        this.state ={
          userName : "Darwish",
          todoItems : [{action:'ABC', done: false}, {action:'Workout', done: true}, {action:'Study', done:true}],
          //  newItem : " "
        }
        
      }


      render()
      {
        return (
                <div>
                     
                      <TodoBanner name={ this.state.userName } To Do List  
                     tasks={this.state.todoItems  } itmes   /> 
               
                <div className="container-fluid">

                    <TodoCreator callback={this.createNewTodo} />


                 

                  <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <td>Description</td>
                            <td>Status</td>
                          </tr>
                        </thead>
                        <tbody>  {this.todoTableRows() }    </tbody>
                  </table>

                </div>
                </div>
            
              );
      }

      changeState = () => {
          this.setState({userName: this.state.userName === 'Darwish' ? 'Dar' : 'Darwish' })
      }

      // Recieve Task from Child Component 
      createNewTodo =( task ) =>
      {
        if(!this.state.todoItems.find(item => item.action === task))
        {
          this.setState({
            todoItems: [...this.state.todoItems, {action: task, done : false}]
          })
        }
      }

      updateNewItemValue =(event) =>
      {
          this.setState({newItem : event.target.value})
      }


      toggeltodo = (todo) =>
     
             this.setState( {todoItems: this.state.todoItems.map(item=>
                      item.action === todo.action ? { ...item, done: !item.done  }   : item) });
    


                      
      todoTableRows = () => this.state.todoItems.map(item =>
                            <TodoRow key={item.action} item={item} callback={this.toggeltodo}  /> );


    
     
  }

export default App;
