'use client'

import Link from 'next/link';
import logo from '@/app/logo.jpg';
import Image from 'next/image';
import NavLink from '../components/NavLink';
import { authClient } from '@/lib/auth-client';
import man from '@/app/man.jpg'


const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user



    return (
        <div className='bg-base-100 shadow-sm '>

            <div className="navbar container mx-auto px-4 grid grid-cols-2 lg:grid-cols-3 items-center justify-between py-3">

                {/* drop down for mobail */}
                <div className="flex items-center gap-2 justify-start">
                    {/* drop down for mobile */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li> <NavLink href="/">Homepage</NavLink> </li>
                            <li> <NavLink href="/products">Products</NavLink> </li>
                            <li> <NavLink href="/profile">My Profile </NavLink> </li>
                        </ul>
                    </div>

                    <Link href={"/"} className="btn btn-ghost text-xl gap-2 px-2">
                        <Image src={logo} height={40} width={40} alt="logo" className='rounded-full' />

                        <h1 className="hidden md:inline text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 tracking-wide">
                            Summer<span className="text-secondary">CART</span>
                        </h1>
                    </Link>
                </div>

                {/* just for long screen */}
                <div className='hidden lg:flex justify-center items-center w-full'>
                    <div className="flex gap-6 font-medium">
                        <NavLink href="/">Homepage</NavLink>
                        <NavLink href="/products">Products</NavLink>
                        <NavLink href="/profile">My Profile </NavLink>
                    </div>
                </div>

                {/* dan pasher onsho*/}
                <div className="flex items-center justify-end gap-2">


                    {user ? (
                        <div className="flex justify-center items-center gap-3">
                            <p className="text-[10px] font-bold tracking-widest uppercase  text-amber-800 px-3 py-1 ">Hello {user.name}</p>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full bg-slate-200">
                                    <Image src={user.image || man} width={60} height={60} alt="user's picture"></Image> <br />
                                </div>
                            </div>
                            <div className="">
                                <button onClick={async () => await authClient.signOut()} className="btn btn-sm btn-primary bg-linear-to-r from-purple-600 to-pink-600 border-none text-white font-bold">
                                    Logout
                                </button>
                            </div>

                        </div>
                    ) : (
                        <div>
                            <Link href="/login" className="btn btn-sm btn-primary bg-linear-to-r from-purple-600 to-pink-600 border-none text-white font-bold">
                                Login
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;