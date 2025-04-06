'use client';

import { useEffect, useRef, useState } from 'react';
import { Employee } from '../ClassEmployees';
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const teamMembers = [
        new Employee("Antonino La Ferrara", "Full stack developer 🧩", {
            src: "/cardEmployees/AntoninoLaFerrara.png",
        }),
        new Employee("Samuele Risso", "CTO", {
            src: "/cardEmployees/MarcoDonati.jpg",
        }),
        new Employee("Stive Baumi", "Design Lead", {
            src: "/cardEmployees/MarcoDonati.jpg",
        }),
        new Employee("Marco Donati", "Creatore di bug 👾", {
            src: "/cardEmployees/MarcoDonati.jpg",
        }),
    ];

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (containerRef.current) {
                        const { top } = containerRef.current.getBoundingClientRect();
                        const progress = Math.min(
                            1,
                            Math.max(0, (window.innerHeight * 0.2 - top) / (window.innerHeight * 0.6))
                        );
                        setScrollProgress(progress);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col justify-center items-center w-full min-h-[150vh] py-20 px-4 "
        >
            <h1
                ref={titleRef}
                className="text-[7vw] md:text-[6vw] text-blue-dark font-bold mb-[3vw] transition-transform duration-100"
                style={{
                    transform: `translateY(${scrollProgress * -100}px) scale(${1 + scrollProgress * 0.2})`,
                    opacity: 1 - scrollProgress * 0.3,
                }}
            >
                {`Scopri chi c'è dietro Zefiro`}
            </h1>

            <div className="w-full max-w-6xl">
                <div
                    className="mb-24 transition-all duration-500 delay-100"
                    style={{
                        transform: `translateY(${(scrollProgress - 0.5) * 100}px)`,
                        opacity: scrollProgress > 0.2 ? 1 : 0,
                    }}
                >
                    <div className="bg-blue-50 border-l-4 border-blue-medium p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-[1.5vw]">
                            Il nostro team
                        </h2>
                        <p className="text-lg text-gray-900 font-semibold">
                            Pionieri di soluzioni, guidati dalla curiosità e dalla voglia di cambiare le regole del gioco.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5vw]">
                    {teamMembers.map((employee, index) =>
                        employee.getCardComponent(scrollProgress, index)
                    )}
                </div>

                <div
                    ref={ref}
                    className="md:mt-[10vw] mt-[20vw] p-[2vw] bg-blue-50 border-l-4 border-blue-medium shadow-md rounded-lg transition-all duration-500 delay-200"
                    style={{
                        transform: inView ? `translateY(${scrollProgress * -50}px)` : 'translateY(50px)',
                        opacity: inView ? 1 : 0,
                    }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-[1.5vw]">I nostri valori</h2>
                    <div className="text-lg text-gray-900 font-semibold space-y-2">
                        <div>
                            <p className="font-extrabold">🌍 Oltre i confini</p>
                            <p>Esploriamo territori inesplorati con curiosità da pionieri.</p>
                        </div>

                        <div>
                            <p className="font-extrabold">🧰 Ecosistema umano</p>
                            <p>Tecnologia che amplifica, non sostituisce l'umanità.</p>
                        </div>

                        <div>
                            <p className="font-extrabold">🍃 Bellezza funzionale</p>
                            <p>Cerchiamo l'armonia perfetta tra forma e sostanza.</p>
                        </div>

                        <div>
                            <p className="font-extrabold">🥳 Gioia contagiosa</p>
                            <p>Lavoriamo con il sorriso e lo trasmettiamo attraverso ciò che creiamo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
