import './MakeRequest.css';
import React from 'react'

const MakeRequest = (props) => {
    const {onAdd} = props;
    return (
    <div className = "makeRequest">
        <button onClick = {onAdd}> Add Request </button>
    </div>
  )}
  export default MakeRequest;