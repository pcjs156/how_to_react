import {Component} from "react";
import './App.css';
import ScrollBox from './ScrollBox'

class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => this.scrollBox = ref}/>
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    Go To Bottom
                </button>
            </div>
        );
    }
};

export default App;
