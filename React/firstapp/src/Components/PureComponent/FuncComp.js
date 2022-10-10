import React from 'react'

function FuncComp(props) {
    console.log("Functional Component  *****")
    return (
        <div>
            FuncComp
            {props.name}
        </div>
    )
}

export default React.memo(FuncComp)