"use client"

import Image from "next/image"
import SocialIcons from "./socialIcons"

export default function Footer() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copiato: ${text}`);
    }

    const section = [
        { id: "servizi", label: "SERVIZI" },
        { id: "aboutUs", label: "ABOUT US" },
        { id: "contattaci", label: "CONTATTACI" }
    ]

    const info = [
        { text: "+39 38904402325" },
        { text: "altair-info@gmail.com" }
    ]

    return (
        <div className="flex flex-col md:flex-row justify-center md:items-center gap-[10vw] w-full h-[150vw] md:h-[24vw] bg-gradient-orange">
            <div className="flex flex-col items-center md:items-start">
                <img
                    src={`/loghi_altair/BigLogoLight.svg`}
                    width={1000}
                    height={1000}
                    alt=''
                    className="w-[50vw] h-[25vw] md:w-[20vw] md:h-[10vw] ml-6 md:ml-0"
                />
                <div className="ml-[1.3vw] text-center md:text-start">
                    {info.map((item, index) => (
                        <div key={index} className="flex items-center justify-center md:justify-start gap-2 group">
                            <p className="text-white text-[5vw] md:text-[1.5vw] font-bold group-hover:text-blue-dark">{item.text}</p>
                            <div className="w-[4.5vw] h-[3.5vw] md:w-[2vw] md:h-[1.5vw] cursor-pointer text-white group-hover:text-blue-dark">
                                <button onClick={() => copyToClipboard(item.text)} title="Copy">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-[4vw] md:mt-[1vw] md:ml-[1.3vw] ">
                    <SocialIcons color="#FFFFFF" hoverColor="text-blue-dark" />
                </div>
            </div>
            <div className="flex flex-col gap-5 items-center md:items-start">
                {section.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-brown-light text-[5vw] md:text-[1.5vw] font-bold hover:text-blue-dark"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    )
}