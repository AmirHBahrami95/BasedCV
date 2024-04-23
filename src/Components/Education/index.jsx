import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './styles.module.css';

import { useNavigate } from "react-router-dom";
import EduFormGroup from "./EduFormGroup";

import {setEducations} from '../../features/resumeSlice';

import { useDispatch } from "react-redux";

export default function(){

    const navigate = useNavigate();
    const dispatch= useDispatch();
    
    const [state,setState]=useState({
        educations:{
            0:{
                id:0, // duplicate - makes things easier trust me!
                type:null,
                where:null,
                what:null
            }
        },
        eduNum:1,
        error:null
    });

    // TODO useEffect() to make sure previously saved Educations are still there 
    // when user revisits! FUUUUUUCK

    const expandForm=()=>{
        let num=Object.keys(state.educations)
        let oldEdus=state.educations;
        let newEdu={id:state.eduNum,type:null,where:null,what:null};
        setState({
            ...state,
            educations:{...oldEdus,[num+1]:newEdu}
        });
    };

    const updateForm=({id,val,key})=>{
        if(id<0 || id>=3) return ; // no such bullshit
        let dipshit=state.educations[id];
        dipshit[key]=val;
        // console.log(dipshit);
        let oldEdu=state.educations;
        setState({...state,educations:{...oldEdu,[id]:dipshit}});
    };

    const submitForm=()=>{
        
        if(state.educations.length>0){
            let i=0;
            for(let e of state.eductaions){
                if(!e['type'])
                    setState({...state,errId:i,error:`Error: "type" not set`});
                else if(!e['where'])
                    setState({...state,errId:i,error:`Error: "where" not set`});
                else if(!e['what'])
                    setState({...state,errId:i,error:`Error: "what" not set`});
                i++;
            }
        }

        else{
            setState({...state,error:false});
            dispatch(setEducations(state.educations));
            navigate('/Work');
        }

    };

    return (
            <Form className={styles.container}>
            <div className={styles.form_container}>

                {Object.keys(state.educations).map(id=>{
                    return(<EduFormGroup key={`fuckall${id}`} defaultState={state.educations[id]} updateForm={updateForm}/>)
                })}

            </div>
            <div>

                {Object.keys(state.educations).length<3 && <Form.Group>
                    <Button onClick={expandForm}>+</Button>
                </Form.Group>}

                <Button variant="primary" onClick={submitForm}>next</Button>
            </div>
        </Form>
    );
};