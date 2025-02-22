import React from "react";

const Event = (props) => {
    return (
        <tr><td className={'Event ' + props.color}>
            <h5> {props.event} </h5>
            <h6> {props.location} </h6>
        </td>
        </tr>
    )    
}

export default Event;