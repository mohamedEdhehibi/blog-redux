import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

const Post = () => {
  return (
    <>
      <Link to='createpost' style={linkStyle}>Create a Post</Link><br />
      <Link to='postlist' style={linkStyle}>Post List</Link>
      <Outlet/>
      </>

      )
}
const linkStyle = {
  textDecoration: 'none', // Remove underline
  color: '#007bff', // Set link color to Bootstrap's primary color
  marginRight: '10px', // Add some spacing between links
  fontWeight: 'bold', // Make the text bold
  fontSize: '1.2rem', // Set the font size to 1.2rem
};
export default Post