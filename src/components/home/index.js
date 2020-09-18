import React, { useState, useEffect } from 'react';

import superagent from 'superagent';
import QuickPost from '../quickpost';

const API = process.env.API_URL || 'https://blog-pwc.herokuapp.com';

 const Home = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true);
        (async () => {
            await superagent.get(`${API}/all`)
                .set('Content-Type', 'application/json')
                .then(data => {
                    setData(data.body);
                    setLoader(false);
                    console.log(data.body)
                });
        })();
    }, []);
    return (
         
        <>
        {console.log("----->",data)}
            {data.map((post) => 
            <QuickPost 
            
            post={post}/>
            )}
        </>
    )
}
export default Home;