import React from 'react'

export const Alert = (props) => {
     
    const Capitalize=(word)=>{
         
        let str= word.toLowerCase();
        return str.charAt(0).toUpperCase() +str.slice(1);

    }

    return (
        <div style={{height:"50px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(props.alert.type)}</strong> {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> }

            </div>
            
    )
}
