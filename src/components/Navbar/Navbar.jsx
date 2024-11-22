import  React, { useState} from 'react'
import './Navbar.css';

const Navbar = () => {
const [ toggleMenu, setToggleMenu ] = useState(false)
  return (
    <div className='kuda__navbar'>
     <div className='nav_left'>
        <div style={{ color: 'black', fontSize: '20px'}}>Logo</div>
        <div style={{ color: 'black', fontSize: '20px'}}>Nav bar</div>
     </div>
     <div></div>
    </div>
  )
}

export default Navbar


{/* <div className='kuda__navbar-logo'>
<img src="" />
</div>
<ul className='kuda__navbar-links'>
{/* <li className='li__navbar'><a href='#personal'>Personal</a></li>
<li className='li__navbar'><a href='#business'>Business</a></li>
<li className='li__navbar'><a href='#company'>Company</a></li>
<li className='li__navbar'><a href='#help'>Help</a></li> 
</ul>
<div className='kuda__navbar-signin'>
<a href='#sign in'>Sign in</a>
<button className='kuda__join-btn'>Join kuda</button>
<img />
</div> */}