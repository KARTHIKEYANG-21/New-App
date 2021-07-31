
import React, { Component } from 'react';
import Listitems from './Listitems.js'
import FunctionalComponent  from './FunctionalComponent 2.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addingInput = this.addingInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addingInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  setUpdate(text, key){
    const items = this.state.items;

    // eslint-disable-next-line array-callback-return
    items.map(item =>{
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }
  render(){
    return (
      

      <div className="App">
          <header>
          <form onSubmit={this.addItem}>
            
                
            <input type="text" placeholder="ENTER VALUES" value={this.state.currentItem.text} onChange={this.addingInput} />
            <button type="submit">Add</button>
          </form>
          </header>
          <Listitems items = {this.state.items}
            setUpdate = {this.setUpdate}></Listitems>
          
       </div>
    );
  }
}

export default App;
