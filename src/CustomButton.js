import React from "react";
import {stylesWrapper} from './stylesWrapper'


const CustomButton=(props)=>{
    return(
        <button style={props.styles}>Click me!</button>
    )
}

export default stylesWrapper(CustomButton);