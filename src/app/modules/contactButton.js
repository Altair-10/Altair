import React from "react";

const SendButton = ({
  type = "button", // Tipo di bottone (default: "button")
  width = "full", // Larghezza (default: "full" per 100%)
  height = "full", // Altezza (default: "full" per 100%)
  text,
  hoverTextColor = "#16697a",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`group font-sans text-[2vw] bg-gradient-orange text-[#ffffff] px-[1.2em] py-[0.8em] flex items-center justify-center border-none rounded-[2vw] shadow-md transition-all duration-300 w-${width} h-${height} hover:transform hover:-translate-y-[0.2vw] hover:shadow-lg active:scale-95 active:shadow-sm ${className}`}
      style={{ color: '#ffffff', '--hover-text-color': hoverTextColor }}
    >
      <div className="transition-all duration-300">
        <div className="rounded-full mr-[0.5em] transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className={`bi bi-send-fill fill-[#ffffff] transition-all duration-300 group-hover:fill-[var(--hover-text-color)] group-hover:rotate-45 transform`}
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
          </svg>
        </div>
      </div>
      <span className="block ml-[0.4em] transition-all duration-300 group-hover:text-[var(--hover-text-color)]">{text}</span>
    </button>
  );
};

export default SendButton;