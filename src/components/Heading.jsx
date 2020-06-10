import React from 'react';
import Button from "../components/Button"

const Heading = (props) => {
return <div >
    <div className="heading-style">{props.heading}</div>
        <div className="flex">
            {props.data.map(btn => <Button {...btn}/> )}
        </div>
    </div>
}

export default Heading;