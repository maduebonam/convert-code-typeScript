// @ts-ignore
import React, { Component } from 'react';


interface CounterState {
    count: number; // The 'count' state must be a number
}

class Counter extends Component<{}, CounterState> {
    state: CounterState = {
        count: 0, // Set initial count to 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 }); // Increment the count
    };

    render() {
        return (
            <div className="flex flex-col items-center">
                <p className="text-2xl">Count: {this.state.count}</p> {/* Display the current count */}
                <button 
                    onClick={this.increment} 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Increment
                </button> {/* Button to increment count */}
            </div>
        );
    }
}

export default Counter; // Export the component