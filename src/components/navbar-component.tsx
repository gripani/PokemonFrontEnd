import React from 'react'

import pjson from '../../package.json'

function NavBarComponent (): React.JSX.Element {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand h1" href="/">PokeApi FrontEnd <sup>v. {pjson.version}</sup></a>

        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>

          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Generations
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                <li><a className='dropdown-item' href='/generation/generation-i'>Generation I</a></li>
                <li><a className='dropdown-item' href='/generation/generation-ii'>Generation II</a></li>
                <li><a className='dropdown-item' href='/generation/generation-iii'>Generation III</a></li>
              </ul>
            </li>

          </ul>

        </div>

      </div>
    </div>
  )
}

export default NavBarComponent
