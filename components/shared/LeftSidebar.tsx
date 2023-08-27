"use client"; //Inform that is a client side component(useRouter)

import { sidebarLinks } from '@/constants/index.js' //Import from constants
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { SignedIn , SignOutButton} from "@clerk/nextjs"; //Remove beta.

function LeftSidebar() {

    const router = useRouter();
    const pathname = usePathname(); //Current URL's pathname.

    return  (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6"> {/*[w-full:full width] , [flex-col:elements appear on top of each other]*/}
                {sidebarLinks.map((link) => {

                    {/*Check which link is currently in use.*/}
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname == link.route;

                    return(
                        <Link 
                        href={link.route}
                        key={link.label}
                        className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
                        >
                            <Image src={link.imgURL} alt={link.label} width={24} height={24}/>
                            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
                        </Link>
                    )}
                )}
            </div>

            <div className="mt-10 px-6"> {/*[mt-10:margin top of 10]*/}
                <SignedIn> {/*Conditionally render content only when the user is signed in.*/}
                    <SignOutButton signOutCallback={() => router.push('/sign-in')}> 
                        <div className="flex cursor-pointer gap-4 p-4">
                            <Image src="/assets/logout.svg" alt="logout" width={24} height={48}/>
                            <p className='text-light-2 max-lg:hidden'>Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
            
        </section>
    )
}

export default LeftSidebar;