import React from 'react';
import Card from 'react-bootstrap/Card'
import { useHistory } from "react-router-dom";
import './quickpost.scss';
 const QuickPost = (props) => {
    const history = useHistory();
    console.log('post---->',props.post)
    return (
        
        <Card className='homecard' 
        onClick={()=>{history.push(`/post/${props.post.id}`);}} > 
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