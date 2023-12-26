import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addTodo } from '../../Js/Actions/actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
        addTodos: todo => dispatch(addTodo(todo))
    }
}
const CreateTodo = (props) => {
    const navigate = useNavigate()
    const [description, setDescription] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodos({
            id: Date.now(),
            description,
            isDone:false
        })
        navigate('/todos/todolist')
    }
    return (
        <Form onSubmit={handleSubmit} className='col-4 mx-auto'>
            
            <Form.Group className="mb-3 " >
                <Form.Label>Add a Todo</Form.Label>
                <Form.Control as="textarea" rows={3}
                    onChange={e => setDescription(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="sumbit"> Add Todo</Button>

        </Form>
    );
}

export default connect(null, mapDispatchToProps)(CreateTodo)