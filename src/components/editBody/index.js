import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Auth from '../auth';
import Form from 'react-bootstrap/Form';
const Body = (props) => {
    const history = useHistory();
    return (
        <div>
            <Auth capability={'admin'} owner={props.data.username}>
            <div>
                <img src={props.data.userImage || 'holder'} />
                <p>{props.data.username}</p>
                <p>{props.data.date}</p>
            </div>

            <div>
                <p>
                    {props.data.body}
                </p>
                <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>edit this body</Form.Label>
                <Form.Control as="textarea" rows="3" value={props.data.body}/>
            </Form.Group>
            <button type="submit" className="btn btn-primary btn-block">Add</button>
        </Form>
            </div>
            
               
            </Auth>

        </div>
    )

}
export default Body;