import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Auth from '../auth'
const Add = (props) => {

    return (
        <Auth>
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <button type="submit" className="btn btn-primary btn-block">Add</button>
        </Form>
        </Auth>

    )
}
export default Add;