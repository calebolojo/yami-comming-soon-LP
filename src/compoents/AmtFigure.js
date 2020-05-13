import React, {useState, useEffect} from 'react'
import { TweenLite } from 'gsap/all';

const myObject = {
    total : 200
}


function AmtFigure(props) {

    const [amt, setAmt] = useState(props.figure);
    useEffect(() => {
        TweenLite.to( myObject, 1, {
            total : props.figure,
            roundProps : "total",
            onUpdate: () => {
                setAmt(myObject.total);
            }
        })
    }, [props.figure]);

    return (
        <div>
            {amt}
        </div>
    )
}

export default AmtFigure
