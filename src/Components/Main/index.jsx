import React from "react";

import {Route, Routes} from 'react-router-dom';

import { Provider } from "react-redux";
import store from "../../features/store";

import PersonalInfo from '../PesonalInfo';

export default function(){
    return (
        <main>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<PersonalInfo/>} />
                    <Route path='/work' element={<PersonalInfo/>} />
                </Routes>
            </Provider>
        </main>
    );
};