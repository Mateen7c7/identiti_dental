import React from "react";
import VideoCarousel from "./VideoCarousel";

const NewHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFFF0] px-5  overflow-hidden font-sans text-center">
      <div className="flex flex-col w-full  max-w-md z-10 gap-6 mt-30">
        {/* Main Title */}
        <h1 className="text-5xl font-bold animate-fade-in-up">
          <span className="block text-[#F05B28]">IDENTITI</span>
          <span className="block text-[#F05B28]">DENTAL</span>
        </h1>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-up-delay-1">
          <span className="h-px w-12 bg-linear-to-r from-transparent to-[#F05B28]"></span>
          <p className="text-lg tracking-[0.3em] uppercase font-light text-black/80 relative">
            <span className="bg-linear-to-r from-[#F05B28] via-[#F05B28]/70 to-[#F05B28] bg-clip-text text-transparent font-medium">
              Your Smile
            </span>
            <span className="mx-2 text-[#F05B28]/40">•</span>
            <span className="text-black/70 font-light">Our Care</span>
          </p>
          <span className="h-px w-12 bg-linear-to-l from-transparent to-[#F05B28]"></span>
        </div>

        {/* Subtitle */}
        <p className="text-md text-gray-600 leading-relaxed px-2 animate-fade-in-up-delay-2">
          Experience exceptional dental care in a modern, comfortable
          environment. We're committed to making your smile our top priority.
        </p>

        {/* CTA Button */}
        <button className="bg-[#F05B28] text-white px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(240,91,40,0.3)] active:scale-95 animate-fade-in-up-delay-3 mx-auto mt-2">
          Book Appointment
        </button>

        <div className="flex flex-col gap-6">
          {/* Video Section */}
        <div className="rounded-2xl overflow-hidden">
          <video
            src="/vid3.mp4"
            className="w-full h-[220px] sm:h-[350px] md:h-[420px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <video
            src="/all2.mp4"
            className="w-full h-[220px] sm:h-[350px] md:h-[420px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <video
            src="/vid2.MP4"
            className="w-full h-[220px] sm:h-[350px] md:h-[420px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
