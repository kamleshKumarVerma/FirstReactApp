import React, { Component } from 'react';

export const User = (props) => {
    return ( 
        <div className="user">
            <p>{props.name}</p>
        </div>
    );
}