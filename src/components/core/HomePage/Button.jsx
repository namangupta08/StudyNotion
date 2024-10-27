import React from 'react';
import { Link } from 'react-router-dom';
import '../../../index.css';

const Button = ({ children, active, linkto }) => {
  return (
    <div>
      <Link to={linkto}>
        <div
          className={`text-center text-[15px] px-9 py-3 rounded-md font-black
          ${active ? "bg-yellow-50 text-black" : "bg-richblack-800 text-white glow-on-hover"}
          hover:scale-95 transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none`}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default Button;
