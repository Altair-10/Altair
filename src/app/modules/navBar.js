"use client"

import Image from "next/image"
import Link from "next/link"
import SocialIcons from './socialIcons'

const Navbar = () => {
    const linkServices = "./services"
    const linkAbout = "./about"

    return (
        <div className="fixed w-full top-0 z-50 h-[20vw] sm:h-[13vw] md:h-[10vw] lg:h-[8vw] xl:h-[5vw] bg-gradient-orange">
            <div className="flex justify-between items-center h-full px-8">
                {/* Logo */}
                <div>
                    <Image
                        src="/loghi_altair/SmallLogoDark.png"
                        width={130}
                        height={60}
                        alt="Logo"
                        className="w-32"
                    />
                </div>

                {/* Items */}
                <div className="hidden sm:flex text-xl gap-[2vw] text-white font-bold">
                    <Link href={linkServices}>
                        <span className="hover:text-blue-dark">SERVICE</span>
                    </Link>
                    <Link href={linkAbout}>
                        <span className="hover:text-blue-dark">ABOUT US</span>
                    </Link>
                </div>

                {/* Social icons */}
                <div className="hidden sm:flex gap-3">
                    <SocialIcons color="#ffffff" hoverColor="text-blue-dark"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;