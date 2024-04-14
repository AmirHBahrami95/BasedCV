import React from "react";

import {Link,useLocation} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import styles from './styles.module.css';

const routes=[
    {to:'/',title:'Start',img:'personal-information-icon'},
    {to:'/education',title:'Education',img:'graduation-cap-icon'},
    {to:'/work',title:'Work',img:'briefcase-icon'},
    {to:'/projects',title:'Projects',img:'web-code-icon'},
    {to:'/preview',title:'Preview',img:'service-provider-icon'}
];

export default function({}){
    let loc=useLocation();
    let len=routes.length; // used for in-betweens
    return (
        <Nav fill variant="pills" as="ul">
            {routes.map((r,i)=>
                <div className={styles.navItemContainer}>
                    <Nav.Item className={styles.navItem} key={r.to} as="li">
                        <Nav.Link 
                            className={r.to==loc.pathname?styles.navLinkSelected:styles.navLink} 
                            as={Link} to={r.to}
                        >
                            <Image
                                className={r.to==loc.pathname?styles.navImgSelected:styles.navImg}
                                src={`/public/icons/${r.img}.svg`} 
                                style={{width:'4w',height:'4vh'}}
                                />
                            <p>
                                {r.title}
                            </p>
                            
                        </Nav.Link>
                    </Nav.Item>
                    <div className={styles.flashContainer}>
                        {(i<len-1) &&
                            (<Image
                                className={styles.flashContainerImg}
                                src={`/public/icons/arrow-long-right-icon.svg`} 
                                style={{width:'2w',height:'2vh'}}
                            />)
                        }
                    </div>
                </div>
            )}
        </Nav>
    );
};

