import React from 'react'
import { Link } from 'react-router'

export const HomeView = () => {
  return (
    <div>
      <ul>
        <li><Link to='/guest'>Guest</Link></li>
        <li><Link to='/host'>Host</Link></li>
      </ul>
    </div>
  )
}

export default HomeView