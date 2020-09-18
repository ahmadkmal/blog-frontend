import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Auth from '../auth'
import { useHistory } from "react-router-dom";

const Add = (props) => {
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
            history.push(`/post/${data.id}`);}
          ).catch(err=console.log(err));
        
      };
    return (
     
        <Auth>
            <div className="form-group">
                <label>title</label>
                <input type="text" className="form-control" placeholder="name" onChange={setTitle}/>
            </div>

          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label> body</Form.Label>
                <Form.Control as="textarea" rows="3" onChange={setBody}/>
            </Form.Group>
            <button type="submit" className="btn btn-primary btn-block">Add</button>
        </Form>
        </Auth>

    )
}
export default Add;