import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  noGlow?: boolean;
}

const Button = ({ children, onClick, noGlow = false, className = "", ...rest }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open("/try-it-now", "_blank");
    }
  };

  const baseClasses = noGlow
    ? "relative px-3 py-2 font-medium text-sm rounded-lg border border-white/15 bg-gradient-to-b from-[#190d2e] to-[#4a208a] transition-colors hover:border-white/25"
    : "relative px-3 py-2 font-medium text-sm rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0_0_12px_#8c45ff]";

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${className}`.trim()}
      {...rest}
    >
      {!noGlow && (
        <div className="absolute inset-0">
          <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,transparent,black)]"></div>
          <div className="absolute rounded-lg inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
        </div>
      )}
      <span className="text-white text-sm">{children}</span>
    </button>
  );
};

export default Button;
