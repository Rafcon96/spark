import { useEffect, useRef, useState } from "react";
import { FlipWords } from "../components/ui/FlipWords";
import LogoSection from "../components/ui/LogoSection";

interface CrossfadeImageProps {
  sources: string[];
  className?: string;
  alt?: string;
  intervalMs?: number;
  transitionMs?: number;
}

function CrossfadeImage({
  sources,
  className = "",
  alt = "",
  intervalMs = 1700,
  transitionMs = 800,
}: CrossfadeImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [overlayIndex, setOverlayIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [measuredAspectRatio, setMeasuredAspectRatio] = useState<number | null>(
    null
  );
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!sources || sources.length <= 1) return;

    const startCycle = () => {
      const nextIndex = (currentIndex + 1) % sources.length;
      setOverlayIndex(nextIndex);
      setShowOverlay(true);

      // After fade, swap base image to the next and hide overlay
      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex(nextIndex);
        setShowOverlay(false);
      }, transitionMs);
    };

    // Kick off immediately so first change happens at interval boundaries
    intervalRef.current = window.setInterval(startCycle, intervalMs);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
    // We intentionally exclude transitionMs from deps to avoid resetting mid-fade
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, intervalMs, sources]);

  const baseSrc = sources?.[currentIndex] ?? "";
  const overlaySrc = sources?.[overlayIndex] ?? "";

  return (
    <div className={className}>
      <div
        className="relative w-full"
        style={
          measuredAspectRatio ? { aspectRatio: measuredAspectRatio } : undefined
        }
      >
        {/* Base image defines layout size before aspect ratio is measured */}
        <img
          src={baseSrc}
          alt={alt}
          className={`${
            measuredAspectRatio
              ? "absolute inset-0 h-full w-full object-cover"
              : "block w-full h-auto"
          } select-none`}
          onLoad={(e) => {
            if (!measuredAspectRatio) {
              const img = e.currentTarget;
              if (img.naturalWidth && img.naturalHeight) {
                setMeasuredAspectRatio(img.naturalWidth / img.naturalHeight);
              }
            }
          }}
        />

        {/* Overlay for crossfade, does not affect layout */}
        <img
          src={overlaySrc}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out pointer-events-none ${
            showOverlay ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: `${transitionMs}ms` }}
        />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="w-full h-fit lg:h-screen bg-black text-white fluid-container ">
      <div className="w-full static lg:relative lg:h-6/8 flex flex-col">
        <CrossfadeImage
          sources={[
            "hero/hero-d-1.svg",
            "hero/hero-d-2.svg",
            "hero/hero-d-3.svg",
          ]}
          alt="Hero illustration"
          className="static lg:absolute top-0 h-full w-full hidden lg:block"
          intervalMs={1700}
          transitionMs={600}
        />
        <CrossfadeImage
          sources={[
            "hero/hero-m-1.svg",
            "hero/hero-m-2.svg",
            "hero/hero-m-3.svg",
          ]}
          alt="Hero illustration"
          className="static lg:absolute top-0 h-full w-full order-2 block lg:hidden"
          intervalMs={1700}
          transitionMs={600}
        />

        {/* Text Content - Top on mobile, absolute positioned on large screens */}
        <div className="w-full container-1200  lg:items-start lg:justify-end lg:relative order-1 justify-self-center ">
          <div className=" col-6 pt-24 lg:pt-64 z-10">
            <div className="text-h1-responsive bg-gradient-horizontal bg-clip-text text-transparent cursor-default pr-[2px]">
              <h1 className="cursor-default">מטרות גדולות?</h1>
              <h1 className="cursor-default">תתחילו מסיפור.</h1>
            </div>
            <div className="py-4 ">
              <p className="lg:text-body-24 m-0  text-body-18 cursor-default ">
                יש לכם הזדמנות:
                <span
                  className="px-1 cursor-default "
                  style={{ fontWeight: "700" }}
                >
                  <FlipWords
                    words={[
                      "למכור",
                      "לשווק",
                      "להוביל שינוי",
                      "לרתום הנהלה",
                      "לגייס השקעה",
                    ]}
                    duration={2000}
                    className="text-caption-lg font-bold text-white cursor-default"
                  />
                  {/* למכור, לשווק, להוביל שינוי, לרתום הנהלה, לגייס השקעה. */}
                </span>
                <br />
                וברגע הזה – הסיפור שלכם עושה את ההבדל.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LogoSection />
    </section>
  );
}

export default Hero;
