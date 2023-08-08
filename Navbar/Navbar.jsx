import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
<header>
    <nav>
        <ul className='list'>
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/football'>Футбол</Link></li>
            <li><Link to='/basketball'>Баскетбол</Link></li>
            <li><Link to='/hockey'>Хоккей</Link></li>
        </ul>
    </nav>
</header>
  )
}
