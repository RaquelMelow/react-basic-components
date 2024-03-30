import React from "react";
import './ListGroup.css';

function ListGroup({ items }) {
    return (
        <div className="list-group">
            {items.map((item, index) => (
                <li key={index} className={`list-group-item ${item.completed ? 'completed' : ''}`}>
                    {item.completed ? <del>{item.text}</del> : item.text}
                </li>
            ))}
        </div>
    );
}

export default ListGroup;
