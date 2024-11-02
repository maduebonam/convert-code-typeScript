// src/components/Greeting.tsx

import React from 'react';

// Step 1: Define an interface for the props
interface GreetingProps {
    name: string; // The 'name' prop must be of type string
}

// Step 2: Create a functional component with props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return (
        <div className="text-xl font-bold mb-11">
            Hello, {name}!
        </div>
    ); // Return the greeting message
};

// Step 3: Export the Greeting component
export default Greeting;
