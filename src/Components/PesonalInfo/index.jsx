import React, { useState } from "react";

// import { useLocation } from "react-router-dom";

import {useNavigate} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

// import styles from '../../assets/form_styles.module.css';

import styles from './styles.module.css';

import { setPersonalInfo } from "../../features/resumeSlice";
import { useDispatch } from "react-redux";

export default function(){

    const [state,setState]=useState({
        fname:null,
        lname:null,
        birthDate:null,
        email:null,
        personalWebsite:null,
        error:null
    });

    const navigate = useNavigate();
    const dispatch=useDispatch();

    const updateForm=(e,key)=>{
        let val=e.target.value;
        let dipshit={}
        dipshit[key]=val
        setState({...state,...dipshit});
    };

    const submitForm=()=>{

        if(!state.fname)
            setState({
                ...state,error:'Please set a correct "First Name"'
            });

        else if(!state.lname)
            setState({
                ...state,error:'Please set a correct "Last Name"'
            });
        
        else if(!state.birthDate)
            setState({
                ...state,error:'Please set a correct "Birth Date"'
            });

        else{
            setState({...state,error:false})
            dispatch(setPersonalInfo({...state}));
            navigate('/education');
        }
    };

    return (
        <Form className={styles.form_container}>
            {state.error && <Alert variant="danger"> {state.error}</Alert>}
            <Form.Group className="mb-4" controlId="fnameDude">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="first name"
                    onChange={(e)=>{updateForm(e,'fname')}}
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId="lnameDude">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="last name" 
                    onChange={(e)=>{updateForm(e,'lname')}}
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId="birthDude">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" 
                    onChange={(e)=>{updateForm(e,'birthDate')}}
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId="emailDude">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="email" 
                    onChange={(e)=>{updateForm(e,'email')}}
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId="emailDude">
                <Form.Label>Pesonal Website</Form.Label>
                <Form.Control type="text" placeholder="example:www.amirhb.com" 
                    onChange={(e)=>{updateForm(e,'personalWebsite')}}
                />
            </Form.Group>
            
            <Button variant="primary" onClick={submitForm}>
                next
            </Button>

        </Form>
    );
};