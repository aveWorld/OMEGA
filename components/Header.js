
import Link from 'next/link'
import '../styles/header.css'

import React, {useState} from 'react'

const Header = () => {
  const [hamburger, setHamburger] = useState(false)
  return (
    <>
    <nav className="nav">
      <Link href="/"><img src="/logo.svg" alt="logo"/></Link>
      <ul className="nav__ul">
        <li className="nav__ul__li"><Link href="/inner"><a>WHAT WE DO</a></Link></li>
        <li className="nav__ul__li"><Link href="/inner"><a>OUR WORK</a></Link></li>
        <li className="nav__ul__li"><Link href="/inner"><a>SEO INSIGHTS</a></Link></li>
        <li className="nav__ul__li"><Link href="/inner"><a>ABOUT US</a></Link></li>
      </ul>
     </nav>
     <a id="nav-toggle" href="#" onClick={() => setHamburger(!hamburger)} className={hamburger?"active" : ""}><span></span></a>
      <div className="hamburger__ul" style={hamburger?{"transform" : "translateY(10%)"} : {}}>
        <div className="hamburger__ul__li"><Link href="/inner" onClick={() => setHamburger(!hamburger)}><a>WHAT WE DO</a></Link></div>
        <div className="hamburger__ul__li"><Link href="/inner" onClick={() => setHamburger(!hamburger)}><a>OUR WORK</a></Link></div>
        <div className="hamburger__ul__li"><Link href="/inner" onClick={() => setHamburger(!hamburger)}><a>SEO INSIGHTS</a></Link></div>
        <div className="hamburger__ul__li"><Link href="/inner" onClick={() => setHamburger(!hamburger)}><a>ABOUT US</a></Link></div>
      </div>
     </>
  );
}

export default Header;