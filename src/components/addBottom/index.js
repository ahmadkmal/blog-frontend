import React, { useEffect, useState } from 'react';
import Auth from '../auth'
import { useHistory } from "react-router-dom";

const AddBottom = (props) => {
    const history = useHistory();

    return (
        <Auth>
        <img 
        className='addpost' 
        onClick={()=>{console.log("addpost--->")
            history.push(`/addPost`);}}
        src='https://pngimg.com/uploads/plus/plus_PNG115.png' alt='add post'/>
        </Auth>
    )
}
export default AddBottom;