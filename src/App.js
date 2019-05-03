import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import './assets/css/index.css';


class App extends Component {
    render() {
        return (
            <Layout>
                <Main/>
            </Layout>
        );    
    };
}

export default App;
