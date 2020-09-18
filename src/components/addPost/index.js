import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Auth from '../auth';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

const AddPost = (props) => {
    const [title , setTitle]= useState('');
    const [body , setBody]= useState('');
    const history = useHistory();
    const handleSubmit = async e => {
        e.preventDefault();
        let api = `https://blog-pwc.herokuapp.com/user/${props.username}`;
        const options = {
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${props.token}`},
          cache: 'no-cache',
        };
        axios.post(api,{title,body},options)
          .then(data => {
              console.log('add post --->',data);
            history.push(`/post/${data.id}`);}
          ).catch(err=>console.log(err));
        
      };
    return (
     
        <Auth>
          <Form onSubmit={handleSubmit}>
          <Form.Control
                placeholder="title"
                name="title"
                id='title'
                className='pFonts borderBu '
                type='text'
                onChange={setTitle}>
              </Form.Control>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="3" placeholder="body" onChange={setBody}/>
            </Form.Group>
            <button type="submit" className="btn btn-primary btn-block">Add</button>
        </Form>
        </Auth>

    )
}
const mapStateToProps = (state) => {
    return {
      user: state.auth.token,
    };
  };
 
  export default connect(mapStateToProps)(AddPost);