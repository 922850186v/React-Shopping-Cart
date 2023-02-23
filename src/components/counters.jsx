import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const { onAddItem, onReset, counters, onDelete, onDecrement, onIncrement } = this.props; //getting the property attributes from the parent
        return (

            <div>
                <button className="btn btn-outline-success btn-sm m-3"
                onClick={onAddItem}
                >Add Item</button>
                <button className="btn btn-outline-primary btn-sm m-4"
                onClick={onReset}
                >Reset</button>
                
                {counters.map(counter=> //mapping elements to each item in the cart
                <Counter 
                key={counter.id} 
                onDelete={onDelete} 
                onDecrement={onDecrement}
                onIncrement={onIncrement}
                counter = {counter}
                >
                </Counter> ) }
            </div>
        );
    }
}
 
export default Counters;