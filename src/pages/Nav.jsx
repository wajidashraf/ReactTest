import React from 'react'
import {Link} from 'react-router-dom'
const Nav = ()=>{
    return(
        <div className = 'navbar'>
            <ul>
                <Link to = '/counter'> <li>Counter</li></Link>
                <Link to = '/money'><li>Money Exchanger</li></Link>
            </ul>
        </div>
    )
}
export default Nav;