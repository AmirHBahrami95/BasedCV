import React from "react";

import styles from './styles.module.css';
import { useLocation } from "react-router-dom";

import routes from "../../features/routes";
import { useSelector } from "react-redux";
import { Alert } from "bootstrap";

export default function(){

    // let shit=useLocation();
    let resume=useSelector(state=>state.resume);

    let output=resume['educations']?resume['educations'][0].type:'kcuf';
    // console.log(shit);

    return (
        <div className={styles.sidenav_container}>
            {output}
        </div>
    );
};