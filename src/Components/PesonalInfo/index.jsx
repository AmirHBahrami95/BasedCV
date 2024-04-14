import React from "react";

import { useLocation } from "react-router-dom";

export default function(){

    let loc=useLocation();
    return (
        <h1> {loc.pathname}, YO!</h1>
    );
};