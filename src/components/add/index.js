import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Auth from '../auth';
import axios from 'axios';
import { connect } from 'react-redux';

const Add = (props) => {
    const [body , setBody]= useState('');
    const handleSubmit = async e => {
        e.preventDefault();
        let api = `https://blog-pwc.herokuapp.com/post/${props.id}`;
        const options = {
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${props.token}`},
          cache: 'no-cache',
        };
        console.log('axios--->',{body})
        axios.post(api,{body},options)
          .then(data => {
              console.log('add post --->',data);
              props.onAdd();
            }
          ).catch(err=>console.log(err));
        
      };
    return (
        <Auth>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="3"
                placeholder='Add to story' 
                onChange={e=>setBody(e.target.value)}/>
            </Form.Group>
            <button type="submit" className="btn btn-primary btn-block">Add</button>
        </Form>
        </Auth>

    )
}
const mapStateToProps = (state) => {
    return {
      token: state.auth.token,
    };
  };
 
  export default connect(mapStateToProps)(Add);