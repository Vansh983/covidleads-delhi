import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
    render(){
        return (
            <div className={styles.container}>
                <h1>App</h1>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;