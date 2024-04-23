import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import styles from './styles.module.css'; // local

export default function({updateForm,defaultState}){

    return (
        <div key={"ASHdkljasd"+defaultState['id']} className={styles.form_group_container}>
            
            {defaultState['error'] && <Alert>{defaultState['error']}</Alert>}

                <Form.Label>Type</Form.Label>
                <Form.Select onChange={(e)=>{updateForm({id:defaultState['id'],key:'type',val:e.target.value})}}>
                    <option>-</option>
                    <option value="Bachelor">Bachelor's</option>
                    <option value="Master">Master's</option>
                    <option value="Doctoral">Doctoral</option>
                </Form.Select>

            <Form.Group className="mb-4" controlId={`whereDude${defaultState['id']}`}>
                <Form.Label>Where</Form.Label>
                <Form.Control defaultValue={defaultState['where']?defaultState['where']:''}
                type="text" placeholder='where did you study?'
                    onChange={(e)=>{updateForm({id:defaultState['id'],key:'where',val:e.target.value})}}
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId={`whatDude${defaultState['id']}`}>
                <Form.Label>What</Form.Label>
                <Form.Control
                    type="text"
                    placeholder='what did you study there?'
                    onChange={(e)=>{updateForm({id:defaultState['id'],key:'what',val:e.target.value})}}
                />
            </Form.Group>
            
        </div>
    );
};