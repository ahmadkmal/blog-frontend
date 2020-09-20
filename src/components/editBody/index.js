import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import superagent from 'superagent';
import axios from 'axios';
import Auth from '../auth';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';

const API = process.env.API_URL || 'http://localhost:3003';
const EditBody = (props) => {
    const history = useHistory();
    const [body, setBody] = useState('');
    const [data, setData] = useState({});
    let { id } = useParams();
    useEffect(() => {
        console.log("post data--->");
        (async () => {
            await superagent.get(`${API}/body/${id}`)
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${props.token}`)
                .then(data => {
                    setData(data.body);
                    setBody(data.body.body);
                    console.log("post data--->", data.body)
                }).catch(err => console.log(err));
        })();


    }, []);
    const handleSubmit = async e => {
        e.preventDefault();
        let api = `http://localhost:3003/body/${id}`;
        const options = {
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' ,'Authorization': `Bearer ${props.token}`},
          cache: 'no-cache',
        };
        console.log('axios--->',{body})
        axios.put(api,{body},options)
          .then(data => {
              console.log('add post --->',data);
              history.goBack();
            }
          ).catch(err=>console.log(err));
        
      };
    return (
        <div>
            <Auth capability={'admin'} owner={data.username || ''}>
                <div>
                    <img src={data.userImage || 'holder'} />
                    <p>{data.username}</p>
                    <p>{data.date}</p>
                </div>

                <div>
                    <p>
                        {data.body}
                    </p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>edit this body</Form.Label>
                            <Form.Control as="textarea" rows="3"
                                value={body}
                                onChange={e => setBody(e.target.value)} />
                        </Form.Group>
                        <button type="submit" className="btn btn-primary btn-block">ُEdit</button>
                    </Form>
                </div>


            </Auth>

        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    };
};

export default connect(mapStateToProps)(EditBody);
