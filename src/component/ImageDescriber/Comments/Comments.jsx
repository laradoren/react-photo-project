import React from 'react';
import './Comments.css';

const Comments = ({date, text}) => {
    return (
        <div className = "comment">
            <div>{date}</div>
            <div>{text}</div>
        </div>
    )
}

export default Comments;