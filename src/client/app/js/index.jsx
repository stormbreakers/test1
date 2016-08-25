import React from 'react';
import {render} from 'react-dom';
import Login from './Login.jsx'

class App extends React.Component {
    render() {
        return (
            <div>
                <Login />
            </div>
        );
    }
}

render (<App />,document.getElementById('app'));