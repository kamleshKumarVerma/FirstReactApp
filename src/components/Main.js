import React from 'react';

export const Main = (props) => {
    return (
        <div className="main">
            <button onClick={() => props.changeName("raj")}>Change Name</button>
        </div>
    );
};