import React from "react";

const style={
    default:{
        padding:10,
        backgroundColor:"grey"
    },
    disabled:{
        backgroundColor:"red"
    }
}

const translateProps=(props)=>{
    var styles=style.default;
    if (props.disabled) {
        styles={...style.default ,...style.disabled}
    }
    const newProps = {...props, styles:styles}

    return newProps;
}

export const stylesWrapper=(WrappedComponent)=>{
    return function wrappedRender(args){
        return WrappedComponent(translateProps(args))
    }
}