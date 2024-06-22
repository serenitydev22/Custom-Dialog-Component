import React from 'react';
// Import the Dialog.css file here
import './Dialog.css';
// Add Draggable
import Draggable from 'react-draggable';

function Dialog(props) {
    return (
        <Draggable
            handle=".dialog-bg"
            defaultPosition={{x: 250, y: 250}}
        >
            <div className="dialog-bg">
                <div className="title"> 
                    <h2>{props.title}</h2>
                    <button className="close" onClick={props.onClose}>X</button>
                </div>

                <hr/>

                <div className="content">
                    <p>{props.content}</p>
                </div>

                <hr/>

                <div className="actions">
                    <button onClick={props.onSubmit}>{props.actionLabel}</button>
                </div>
            </div>
        </Draggable>
    );
}

export default Dialog;