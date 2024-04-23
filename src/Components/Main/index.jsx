import React from "react";

import {Route, Routes} from 'react-router-dom';

import { Provider } from "react-redux";
import store from "../../features/store";
import SideNav from "../SideNav";

import PersonalInfo from '../PesonalInfo';

import styles from './styles.module.css';
import Education from "../Education";

export default function(){
    let debug=false;
    return (
        <div className={styles.main_container}>
            <Provider store={store}>
                <div className="mb-6">
                    <main className={styles.main}>
                            <Routes>
                                <Route path='/' element={<PersonalInfo/>} />
                                <Route path='/education' element={<Education/>}/>
                                <Route path='/work' element={<PersonalInfo/>} />
                            </Routes>
                    </main>
                </div>
                {debug && <SideNav className="mb-3"/>}
            </Provider>
        </div>
    );
};