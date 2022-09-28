import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import homeIcon from "public/icon.png"
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <nav className='flxed top-0 w-full h-24 p-3 bg-emerald-900
    flex justify-between items-center
    '>
        <Link href="/">
            <a className='flex w-14 h-14'>
                <Image src={homeIcon} />
            </a>
        </Link>

<div className="
flex gap-5
">
    <PersonIcon sx={{color:"#ffff"}}/>
        <ShoppingCartIcon sx={{color:"#ffff"}}/>
        <MenuIcon sx={{color:"#ffff"}}/>
</div>
        
    </nav>
  )
}

export default Navbar