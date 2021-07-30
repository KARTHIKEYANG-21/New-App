import React, {Component} from 'react';
import ChildClassComponent from './ChildClassComponent';
// import {Button} from 'react-bootstrap';

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            name: 'Deepak Kumar',
            listCities: ['Hazaribagh', 'Bhatinda', 'Jaunpur', 'Akot', 'Daulatpur', 'Gorakhpur']
        }
    }

    incrementFn = () => {
        console.log('increment...');
        // this.state.count = this.state.count + 1;
        this.setState(
            {
                count: this.state.count + 1
            }
        )
    }
    decrementFn = () => {
        console.log('decrement...');
        this.setState(
            {
                count: this.state.count - 1
            }
        )
    }
    resetFn = () => {
        console.log('reset...');
        this.setState(
            {
                count: 0
            }
        )
    }

    inputFn = (event) => {
        console.log(event.target.value);
    }


    render() {
        return (
            <>
                <h1>This is a class component.</h1>


                <h1>{this.state.count}</h1>
                <button onClick={this.incrementFn}>Increase</button>
                <button onClick={this.decrementFn}>Decrease</button>
                <button onClick={this.resetFn}>Reset</button>

                <ChildClassComponent name={this.state.name} age={40} city='GGN'/>

                <h1>Cities List</h1>

                {this.state.listCities && this.state.listCities.map((item, index) => (
                        <h5 key={index}>{item}</h5>
                    ))
                }

            </>
        )
    }
}

export default ClassComponent;