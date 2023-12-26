import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { deleteTodo, doneTodo, editTodo } from '../../Js/Actions/actions';
import './TodoList.css';

const TodoList = () => {


    const [description, setDescription] = useState({});
    const [show, setShow] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleClose = () => {
        setShow(false);
        setSelectedTodo(null);
    };

    const handleShow = (id) => {
        const selected = todos.find((el) => el.id === id);
        setSelectedTodo(selected);
        setDescription(selected.description);
        setShow(true);

 
    };

    const handleSaveChanges = () => {
        // Mettez à jour la tâche dans le store Redux ici
        dispatch(editTodo(selectedTodo.id,  description ));
        handleClose();
    };
    console.log(description); 

    return (
        <div>
            {todos.map((todo) => (
                <Card key={todo.id} className='col-4 mx-auto'>
                    <Card.Header>
                        <Card.Title as='h2' className={todo.isDone ? 'done' : 'undone'}>
                            {todo.description}
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Button
                            style={{ marginRight: 10 }}
                            variant='danger'
                            onClick={() => dispatch(deleteTodo(todo.id))}
                        >
                            Delete
                        </Button>
                        <Button
                            variant='success'
                            onClick={() => dispatch(doneTodo(todo.id))}
                        >
                            Done
                        </Button>
                        <Button
                            variant='warning'
                            className='mx-3'
                            onClick={() => handleShow(todo.id)}
                        >
                            Edit
                        </Button>
                    </Card.Body>
                </Card>
            ))}
            {/* Modal edit */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                            <Form.Label>Description Todo</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TodoList;
