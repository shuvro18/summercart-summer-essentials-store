'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

 

const NavLink = ({children, href}) => {

    const pathname = usePathname();
    const isTrue = pathname === href

    return (
        <div>
            <Link href={href} className={`${isTrue ? "text-primary border-b border-primary" : ""}`} >
            
                {children}

            </Link>
        </div>
    );
};

export default NavLink;