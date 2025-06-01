import React, { useState, useEffect } from 'react';

function Animation(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, [props.children]);

    let classes = props.classes ? props.classes : "";
    classes += " transition-all duration-700 ease-out transform ";
    if (show) {
        classes += "opacity-100 scale-100";
    } else {
        classes += "opacity-0 scale-75";
    }

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Animation;