import React from "react";

export default function ContactButton (){
  const scrollToSection = (id) => {
    if (typeof document !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={() => scrollToSection("contactUs")}
      className="
        group flex items-center justify-center
        h-[13vw] md:h-[4.5vw] px-[1em] mt-[5vw] md:mt-0
        font-sans text-[5vw] md:text-[1.5vw] text-[#ffffff]
        border-none rounded-[4vw] md:rounded-[2vw] shadow-md bg-gradient-orange
        transition-all duration-300 hover:transform hover:-translate-y-[0.2vw] hover:shadow-lg active:scale-95 active:shadow-sm
      "
      style={{ color: '#ffffff', '--hover-text-color': "#16697a" }}
    >
      <div className="transition-all duration-300">
        <div className="mr-[2.5vw] transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className={`
              bi bi-send-fill fill-[#ffffff] transition-all duration-300 group-hover:fill-[var(--hover-text-color)] 
              group-hover:rotate-45 transform h-[9vw] w-[9vw] m-[4vw] md:h-[3vw] md:w-[3vw] md:m-[0]`}
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
          </svg>
        </div>
      </div>
      <span className="block transition-all duration-300 group-hover:text-[var(--hover-text-color)]">
        CONTATTACI
      </span>
    </button>
  );
};
