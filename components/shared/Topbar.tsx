import Link from "next/link" //Used to create client-side navigation links
import Image from "next/image" //NextJS API for displaying images.
import { SignedIn , SignOutButton , OrganizationSwitcher } from "@clerk/nextjs"; //Remove beta.
import { dark } from '@clerk/themes'

function Topbar() {
    return  (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28}/> 
                <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
            </Link>   

            <div className="flex items-center gap-1 ">
                <div className="block md:hidden">
                    <SignedIn> {/*Conditionally render content only when the user is signed in.*/}
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                            <Image src="/assets/logout.svg" alt="logout" width={24} height={48}/> 
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>

                {/*
                OrganizationSwitcher component allows users to switch between different organizations (groups).
                The appearance of the organization switcher trigger is customized using the appearance prop (padding Y and X).
                */}

                <OrganizationSwitcher 
                appearance={{
                    baseTheme:dark,
                    elements:{organizationSwitcherTrigger:"py-2 px-4"}
                }} 
                
                />
            </div>
        </nav>
    )
}

export default Topbar;