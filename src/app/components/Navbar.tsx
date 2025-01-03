import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul className="flex gap-2 text-blue-700 text-sm">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/products'}>Products</Link></li>
                <li><Link href={'/dashboard'}>Dashboard</Link></li>
                <li><Link href={'/api'}>API</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar