import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addDislike, addLike, deletePost, editPost } from '../../Js/Actions/actions';
import like from '../../icons/like.png';
import dislike from '../../icons/dislike.png';
import './PostList.css';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    const [selectedPost, setSelectedPost] = useState({});
    const [content, setContent] = useState('');
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');

    const handleShow = (id) => {
        const selected = posts.find((el) => el.id === id);
        setSelectedPost(selected);
        setTitle(selected.title);
        setContent(selected.content);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedPost(null);
    };

    const handleSaveChanges = () => {
        if (!selectedPost) return; 
        const updatedPost = {
            id: selectedPost.id,
            title: title,
            content: content,
        };
        dispatch(editPost(updatedPost));
        handleClose();
    };


    return (
        <div>
            {posts.map((post) => (
                <Card key={post.id} className='col-4 mx-auto'>
                    <Card.Header>
                        <Card.Title as='h2'>{post.title}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{post.content}</Card.Title>
                        <Button
                            className='btn btn-danger'
                            onClick={() => dispatch(deletePost(post.id))}
                        >
                            Delete
                        </Button>
                        <Button
                            variant='warning'
                            className='mx-3'
                            onClick={() => handleShow(post.id)}
                        >
                            Edit
                        </Button>
                        <br />
                        <img
                            src={like}
                            width='35'
                            alt='like'
                            onClick={() => dispatch(addLike(post.id))}
                        />
                        {post.like}
                        <img
                            src={dislike}
                            width='35'
                            alt='dislike'
                            onClick={() => dispatch(addDislike(post.id))}
                        />
                        {post.dislike}
                    </Card.Body>
                </Card>
            ))}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type='text'
                                value={title}// Assurez-vous que c'est la valeur correcte
                                onChange={(e) => setTitle(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                        >
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                value={content}// Assurez-vous que c'est la valeur correcte
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={()=>handleSaveChanges()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PostList;
