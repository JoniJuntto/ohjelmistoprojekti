import React from 'react';

export default function Lista(props) {

    if (props.listValue.length === 0){
        return (<p>Ei sisältöä</p>);
    }

    const listItems = props.listValue.map((listValue) =>
        <li>{listValue.kysymys}</li>
    );

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}