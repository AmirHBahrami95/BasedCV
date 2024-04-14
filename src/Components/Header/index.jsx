import React from "react";

import HeaderNav from "./HeaderNav";
import styles from './styles.module.css';

import { Image,Stack } from "react-bootstrap";

export default function(){

    return (
        <header className={styles.headerDude}>
            <HeaderNav />
        </header>
    );

}