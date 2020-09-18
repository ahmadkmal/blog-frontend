import React from 'react';
import Card from 'react-bootstrap/Card'
import './quickpost.scss';
 const QuickPost = (props) => {
    console.log('post---->',props.post)
    return (
        
        <Card className='homecard'> 
        <Card.Img className='home homeImage' variant="top" src={props.post.body[0].userImage||"holder.js/100px180"} />
        <Card.Title className='hometitle'>{props.post.title}</Card.Title>
        <Card.Body>
          <Card.Text>
          {props.post.body[0].body}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default QuickPost;