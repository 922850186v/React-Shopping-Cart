import NavBar from './components/navbar';
import React, {Component } from 'react';
import './App.css';
import Counters from './components/counters';
import { isDisabled } from '@testing-library/user-event/dist/utils';

class App extends Component {
  state = { 
    counters : [
        { id:1, value:0 },
        { id:2, value:0 },
        { id:3, value:0 },
        { id:4, value:0 },
    ]
 } ;

 
 //Increase the value in item count
 handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
 };

  //Adding items to the cart
 itemAddHandler=()=>{
  const newItem = { id:this.state.counters.length +1, value:0 };
  this.setState({ counters:[...this.state.counters,newItem] });
  // console.log(newItem);
 };

  //resets All values in the cart to zero
 handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
 };

 //Decrease item value till 0 and stop
 handleDecrement=(counter)=>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  (counters[index].value>0 ? counters[index].value-- : counters[index].value = 0 && isDisabled===true);
  this.setState({counters});
 };

  //delete the unwanted items from the cart
 handleDelete = counterId => {
     const updatedCounters = this.state.counters.filter(c => c.id !== counterId);
     const newCounter = updatedCounters.map((counter , index)=>{
      return { id: index + 1, value: counter.value};
     })
     this.setState({counters : newCounter});
 };

  //Display total items to buy
 totalItemCount = ()=>{
  const totalValue = this.state.counters.reduce((sum , counter)=>sum + counter.value , 0) ;
  return totalValue;
 };

  //return the output
  render() { 
    return (
      <><NavBar totalCounters={this.totalItemCount()} />
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onAddItem={this.itemAddHandler}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        />
        </main></>
    );
  }
}
 
export default App;

