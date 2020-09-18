import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import superagent from 'superagent';
import Auth from '../auth';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';

const API = process.env.API_URL || 'https://blog-pwc.herokuapp.com';
const EditBody = (props) => {
    const history = useHistory();
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(false);
    let { id } = useParams();
    useEffect(() => {
        setLoader(true);
        console.log("post data--->");
        (async () => {
            await superagent.get(`${API}/body/${id}`)
                .set('Content-Type', 'application/json')
                .set('Authorization',`Bearer ${props.token}`)
                .then(data => {
                    setData(data.body);
                    setLoader(false);
                    console.log("post data--->", data.body)
                }).catch(err => console.log(err));
        })();


    }, []);
    return (
        <div>
            <Auth capability={'admin'} owner={data.username||''}>
            <div>
                <img src={data.userImage || 'holder'} />
                <p>{data.username}</p>
                <p>{data.date}</p>
            </div>

            <div>
                <p>
                    {data.body}
                </p>
                <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>edit this body</Form.Label>
                <Form.Control as="textarea" rows="3" value={data.body}/>
            </Form.Group>
            <button type="submit" className="btn btn-primary btn-block">Add</button>
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
  