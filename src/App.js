import React, { Component } from 'react';
import './App.css';
import Task from './components/taskComponent.js';
import AddOption from './components/addOptionComponent.js';
import { TASKS } from './shared/tasks';
import {Container, Row, Button} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: TASKS,
      num: TASKS.length 
    };

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.handleRandom = this.handleRandom.bind(this);

  }

  addTask(option) {
    this.setState({num : this.state.num+1})
    const newTask = { 
      id: this.state.num,
      content: option
    };
    console.log(newTask);
    this.setState({tasks : [...this.state.tasks, newTask]});
  }

  removeTask(taskId) {
    this.setState({tasks : this.state.tasks.filter(task => task.id !== taskId)});
  }
  
  handleRandom(e) {
    const item = this.state.tasks[Math.floor(Math.random()*this.state.tasks.length)].content;
    alert('You should: ' + item);
  }


  render() {
    return (
      <div className="App">
        <Container className="centered">
          <div className='d-none d-md-block'>
            <img id="logo" src="https://www2.tusitalabooks.com/wp-content/uploads/2015/10/tusifoxLogo_300x300px.png" alt="Tusitala Logo"></img>
          </div>
          <div className="mid-form col-10 col-md-8 font-fix">
            <Row>
              <h1>Indecisive App</h1>
              <p>Put your choices in the hands of a computer</p>
            </Row>
            <Row>
              <Task tasks={this.state.tasks}
                    removeTask={this.removeTask}/>
            </Row>
            <Row>
              <AddOption addTask={this.addTask}/>
            </Row>
            <Row>
              <Button type='button' color="success" onClick={this.handleRandom}>What Should I do?</Button>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
