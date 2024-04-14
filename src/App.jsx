import React from "react";
import store from './features/store';
import {Provider} from 'react-redux';

import Header from './Components/Header';
import Main from './Components/Main';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>  
            <Provider store={store}>
                <Header />
                <Main />
            </Provider>
        </>
    );
};

export default App;