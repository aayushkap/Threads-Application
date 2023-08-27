"use client"; //Inform that is a client side component(useRouter)

import { sidebarLinks } from '@/constants/index.js' //Import from constants
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

//Only visible in mobile view
function Bottombar() {

    const router = useRouter();
    const pathname = usePathname(); //Current URL's pathname.

    return  (
        <section className="bottombar">
            <div className="bottombar_container">
                
                {sidebarLinks.map((link) => {
                    {/*Check which link is currently in use.*/}
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname == link.route;

                    return(
                        <Link 
                        href={link.route}
                        key={link.label}
                        className={`bottombar_link ${isActive && 'bg-primary-500'}`}
                        >
                            <Image src={link.imgURL} alt={link.label} width={24} height={24}/>
                            <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                                {link.label.split(/\s+/)[0]}
                            </p>
                        </Link>
                    )}
                    )}
            </div>
        </section>
    )
}

export default Bottombar;