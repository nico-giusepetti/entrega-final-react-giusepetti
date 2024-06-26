import React, { useState } from 'react';
import './Count.css'

const ItemCount = ({count, handleCount, stock }) => {
    

    const handleIncrement = () => {
        if (count < stock) {
            handleCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            handleCount(count - 1);
        }
    };

    return (
        <div className="count-container">
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default ItemCount;
