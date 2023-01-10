import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = (
        <React.Fragment>
        <li>
        <Link to='/' className='hover:text-secondary font-bold hover:border-2 hover:border-red-600'>Home</Link>
        <Link to="#AboutMe" className='hover:text-secondary font-bold hover:border-2 hover:border-red-600'>About Me</Link>
        <Link to='/Services' className='hover:text-secondary font-bold hover:border-2 hover:border-red-600'>Projects</Link>
        <Link to='/Contact' className='hover:text-secondary font-bold hover:border-2 hover:border-red-600'>Contact Me</Link>
        </li>
        </React.Fragment>
    )
    return(
        <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Aryan Rawat</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://drive.google.com/file/d/15w8EjX7coDv3nka5hEFiouC9UyIrlZ9N/view?pli=1" className="btn border-yellow-600 text-secondary">Resume</a>
  </div>
</div>
        </div>
    );
}

export default Navbar;
