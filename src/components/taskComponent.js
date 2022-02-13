import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

class Task extends Component {
    render() {
        const taskview = this.props.tasks.map((task) => {
            return (
                <div className="col-12">
                    <Row key={task.id}>
                        <Col md={8}>
                            {task.content}
                        </Col>
                        <Col md={4}>
                            <Button onClick={() => this.props.removeTask(task.id)}>Remove Task</Button>
                        </Col>        
                    </Row>
                </div>
                
            );
        });

        return(
            <div>
                {taskview}
            </div>
        )
    }
}

export default Task;