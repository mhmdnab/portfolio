import React from "react";

const Footer = () => {
  return (
    <div
      id="contact"
      className="p-4 m-auto items-center w-full flex-col justify-center bg-gradient-to-r from-[#147b86] to-[#055b64] border shadow-2xl"
    >
      <div className="items-center py-4">
        <p className="text-[#caf3f8] text-center">
          Drop me an email so we can reach out and build together
        </p>
        <p className="text-[#caf3f8] w-auto p-2 text-center underline">
          <a href="mailto:mhmdnab004@gmail.com">mhmdnab004@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
