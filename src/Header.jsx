import React from 'react'

export const Header = () => {
  return (
    <div>
              <div>
            <nav className='Header'>
                <div className='logo'>
                    <img src='/brand_logo.png' alt='logo'/>

                </div>
                <div>
                    <ul className='nav'>
                        <li>MENU</li>
                        <li>LOCATION</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
               <button className='Login'>Login</button>
            </nav>
        </div>
    </div>
  )
}
