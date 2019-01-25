import React from 'react';
import Comment from './Comment';

const Comments = ({comments}) => {
    return (
        <React.Fragment>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </React.Fragment>
    );
}

export default Comments;
