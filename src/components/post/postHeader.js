import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
const PostHeader = (props) => {

    return (
        <div className='postheader'>
            <Card className="bg-dark text-white">
                <Card.Img src={props.image || 'holder'} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{props.name || 'wait...'}</Card.Title>
                </Card.ImgOverlay>
            </Card>
            {/* <div>
                <img src={props.image || 'holder'} alt='' />
                <p>{props.name || 'wait...'}</p>
            </div> */}

            <h3>
                {props.title || 'wait...'}
            </h3>
        </div>
    )
}
export default PostHeader;