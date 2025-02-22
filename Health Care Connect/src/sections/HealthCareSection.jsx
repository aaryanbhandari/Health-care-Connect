import React from "react";

const HealthCareSection = () => {
  return (
    <section className="py-16 relative z-30">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start  gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-start gap-4 flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Your Trusted Partners in Healthcare Solutions
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                We specialize in patient care, providing trained nurses and caretakers for day/night shifts or 24-hour care. Our goal is to ensure quality and compassionate healthcare services at your convenience.
              </p>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                We specialize in patient care, providing trained nurses and caretakers for day/night shifts or 24-hour care. Our goal is to ensure quality and compassionate healthcare services at your convenience.
              </p>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-[#177709] hover:bg-[#01adf0] transition-all duration-700 ease-in-out rounded-lg shadow-md justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Contact Us
              </span>
            </button>
          </div>
          <img
            className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717751272.png"
            alt="Healthcare Connect"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthCareSection;
