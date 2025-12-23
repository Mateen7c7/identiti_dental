import { useEffect, useRef, useState } from "react";

const videos = [
  "/vid1.MP4",
  "/vid2.MP4",
  "/vid3.mp4",
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [current]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-2xl shadow-xl bg-black">
        <video
          ref={videoRef}
          className="w-full h-[220px] sm:h-[350px] md:h-[420px] object-cover transition-all duration-500"
          src={videos[current]}
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
        />

        {/* Progress dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {videos.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
