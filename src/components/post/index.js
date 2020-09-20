import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { useParams } from 'react-router-dom';
import PostHeader from './postHeader';
import Body from '../body';
import Add from '../add';
const API = process.env.API_URL || 'http://localhost:3003';
import './style.scss';
const Post = (props) => {
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(false);
    let { id } = useParams();
    const getData=()=>{
        superagent.get(`${API}/post/${id}`)
        .set('Content-Type', 'application/json')
        .then(data => {
            setData(data.body);
            setLoader(false);
            console.log("post data--->", data.body)
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoader(true);
        console.log("post data--->");
        (async () => {
            await getData();
        })();


    }, []);
    return (
        <>
        {data.body?(<PostHeader image={data.body[0].userImage||''} name={data.username} title={data.title}/>):null}
        {data.body?data.body.map(body=><Body data={body}/>):null}
        <Add onAdd={getData} id={data.id}/>
        </>

    )
}
export default Post;