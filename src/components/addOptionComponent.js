import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';

class AddOption extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        if (this.state.option !== ''){
            this.props.addTask(this.state.option);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Col md={8}>
                            <Input type="text" id="option" name="option"
                                placeholder="Add Option" className='font-fix'
                                value={this.state.option}
                                onChange={this.handleInputChange} />
                        </Col>
                        <Col md={4} className="input-group-append">
                            <Button type="button" color="primary" onClick={this.handleSubmit}>
                                Add Option
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default AddOption;