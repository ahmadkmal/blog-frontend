import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";
import Auth from '../auth';
const Body = (props) => {
    const history = useHistory();
    return (
        <div>
            <div>
                <img src={props.data.userImage || 'holder'} />
                <p>{props.data.username}</p>
                <p>{props.data.date}</p>
            </div>

            <div>
                <p>
                    {props.data.body}
                </p>
            </div>
            <Auth capability={'admin'} owner={props.data.username}>
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1200px-Edit_icon_%28the_Noun_Project_30184%29.svg.png' 
                alt='edit' 
                onClick={()=>{history.push(`/body/${props.data._id}`);}}
                />
            </Auth>

        </div>
    )

}
export default Body;