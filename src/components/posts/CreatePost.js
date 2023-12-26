import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addPost } from '../../Js/Actions/actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: post => dispatch(addPost(post))
    }
}
const CreatePost = (props) => {
    const navigate = useNavigate()
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addArticle({
            id: Date.now(),
            title,
            content,
            like: 0,
            dislike: 0
        })
        navigate('/posts/postlist')
    }
    return (
        <Form onSubmit={handleSubmit} className='col-4 mx-auto'>
            <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title"
                    onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3 " >
                <Form.Label>Article</Form.Label>
                <Form.Control as="textarea" rows={3}
                    onChange={e => setContent(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="sumbit"> Add Article</Button>

        </Form>
    );
}

export default connect(null, mapDispatchToProps)(CreatePost)