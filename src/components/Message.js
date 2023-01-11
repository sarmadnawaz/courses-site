import React from 'react';

export const Message = ({ message, type }) => {
    const classes = `message ${type}`;
    return (
        <div className={classes}>
            <p>{message}</p>
        </div>
    );
};