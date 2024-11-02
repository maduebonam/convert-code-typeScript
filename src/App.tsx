import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400 ">            
            <Greeting name="Egwu kingsley Mmaduebonam" />
            <Counter />
        </div>
    );
};

export default App
