import React from 'react'

// export default function FRInput(props) {
//     console.log(props)
//   return (
//     <div>
//         <input type="text" ref =  {props.ref}/>
//     </div>
//   )
// }

 const FRInput = React.forwardRef((props,ref) => {

    return (
      <div>
        <h1>{props.age}</h1>
        <input type="text" ref =  {ref}/>
      </div>
    )
  }
  )

  export default FRInput