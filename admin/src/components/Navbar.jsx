import React from 'react'
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"
const Navbar = () => {
    return (
        <div className='max-padd-conatiner flexBetween py-2'>
            <img src={logo} width={155} height={155} alt='logo' />
            <img src={profile} width={46} height={46} alt='profile' className='rounded-full' />
        </div>
    )
}

export default Navbar