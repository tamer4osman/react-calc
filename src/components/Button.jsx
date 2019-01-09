import React from 'react';
import './Butten.css';

const isOperator = val =>{
    return !isNaN(val) || val ==="." || val==="=" 
}
const Button = props =><div 
className= {`button-wrapper ${isOperator? null : "operator"}`}
>
{props.children}
</div>
export default Button;