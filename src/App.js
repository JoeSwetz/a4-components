import React from 'react';
import Columns from "./Columns"
import * as serviceWorker from './serviceWorker';

/**
 * Top level component for the application once a user has logged in.
 * Equivalent to app.html in A3.
 */
class App extends React.Component {
    render() {
        return(
            <React.StrictMode>
                <h1 className="title has-text-centered">FPS Stat Calculator</h1>
                <Columns/>
            </React.StrictMode>
        )
    }
}

export default App;
serviceWorker.unregister();
