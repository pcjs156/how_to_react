import './App.css';
import {Fragment} from "react";

function App() {
    const name = 'React';
    return (
        <div>
            {name === 'React' && <h1>This is React</h1>}
        </div>
    );
}

export default App;
