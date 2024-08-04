import styled from './input.module.css';

function Input(props){
    return(
        <div className={styled.inputwraper}>
        <label>{props.label} </label>
        <input  name={props.name} onChange={props.HandelChange} type="text"/>
    </div>
    );

}

export default Input;