import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

const Todo = () => {
     return (
    <>
      <Link to='createtodo' style={linkStyle}>
        Create a Todo
      </Link>
      <br />
      <Link to='todolist' style={linkStyle}>
        Todo List
      </Link>
      <Outlet />
    </>
  );
};

const linkStyle = {
  textDecoration: 'none', // Remove underline
  color: '#007bff', // Set link color to Bootstrap's primary color
  marginRight: '10px', // Add some spacing between links
  fontWeight: 'bold', // Make the text bold
  fontSize: '1.2rem', // Set the font size to 1.2rem
};

export default Todo