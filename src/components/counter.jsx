import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.counter.value //getting values from the Parent State
     } ;


    render() { 
        
        return (
        <div>
            <span >Item ID : {this.props.counter.id}</span>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={ ()=> this.props.onIncrement(this.props.counter) } className='btn btn-secondary btn-sm m-1'>+</button>
            <button onClick={ ()=> this.props.onDecrement(this.props.counter) } className='btn btn-dark btn-sm m-1'>-</button>
            <button onClick={ ()=> this.props.onDelete(this.props.counter.id) } className='btn btn-outline-danger btn-sm m-2' >Delete</button>
        </div>
        );
    }

    //dynamically change the item count background. if 0(warning) else(primary)
    getBadgeClasses() {
        let classes = "badge m-3 badge-md badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    //zero value represented as a string for future modifications. You can change that as "zero" if you want
    formatCount() {
        const {value: count} = this.props.counter;
        return count ===0 ? "0" : count;
    }
}
export default Counter;