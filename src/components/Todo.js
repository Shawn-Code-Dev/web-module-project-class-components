import React, { useState } from 'react';

const Task = props => {
    const handleClick = () => {
        props.handleComplete(props.task.id);
    }

    return(
        <div onClick = {handleClick} className={`item${props.task.complete ? ' complete' : ''}`}>
            <p>{props.task.task}</p>
        </div>
    );
};

export default Task;