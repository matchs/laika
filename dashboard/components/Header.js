import React from 'react'
import { Link } from 'react-router-dom'

import Container from './Container'
import Logo from './Logo'
import './Header.css'

const Header = () =>
  <div className='lk-header'>
    <Container>
      <div className='lk-header__wrapper'>
        <ul>
          <li>
            <Link to='/'><Logo /></Link>
          </li>
          <li>
            <Link to='/new/environment'>New environment</Link>
          </li>
          <li>
            <Link to='/new/feature'>New feature</Link>
          </li>
        </ul>
      </div>
    </Container>
  </div>

export default Header
