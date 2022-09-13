import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
export default function Product() {
  return (
    <div>
      Product
      <br />
     <NavLink to = "featured" className = "navItem" > Featured</NavLink>
     <NavLink to = "newproduct" className = "navItem" > New Products</NavLink>
     <Outlet/>
    </div>
  )
}
