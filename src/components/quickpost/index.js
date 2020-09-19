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
        <Card.Img className='home homeImage' variant="top" src={props.post.body[0].userImage||"https://img.onmanorama.com/content/dam/mm/en/news/columns/straight-talk/images/2020/7/16/pricewaterhousecoopers-pwc.jpg"} />
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