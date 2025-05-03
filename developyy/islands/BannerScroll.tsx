import { useEffect, useRef, useState } from "preact/hooks";

export default function BannerScroll({
  text = "Developyy",
  color = "#fff",
  speed = 100,
}: {
  text?: string;
  color?: string;
  speed?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bannerRef  = useRef<HTMLParagraphElement>(null);
  const [duration, setDuration] = useState(20); // seconds

  /** :one:  Keep your existing “make it fit the viewport” logic */
  useEffect(() => {
    const resize = () => {
        if (!wrapperRef.current || !bannerRef.current) return;
      
        const wrapperWidth = wrapperRef.current.clientWidth;
      
        // Temporarily clone one span for clean measurement
        const tempSpan = document.createElement("span");
        tempSpan.style.visibility = "hidden";
        tempSpan.style.position = "absolute";
        tempSpan.style.whiteSpace = "nowrap";
        tempSpan.style.fontFamily = "'Press Start 2P', monospace";
        tempSpan.innerText = text;
      
        document.body.appendChild(tempSpan);
      
        let fontSize = 1000;
        tempSpan.style.fontSize = `${fontSize}px`;
      
        while (tempSpan.offsetWidth > wrapperWidth && fontSize > 10) {
          fontSize -= 1;
          tempSpan.style.fontSize = `${fontSize}px`;
        }
      
        bannerRef.current!.style.fontSize = `${fontSize}px`;
        document.body.removeChild(tempSpan);
    };

    resize();
    globalThis.addEventListener("resize", resize);
    return () => globalThis.removeEventListener("resize", resize);
  }, []);

  /** :two:  Figure out how long one lap should take */
  useEffect(() => {
    if (!bannerRef.current) return;
    const span = bannerRef.current.querySelector("span");
    if (!span) return;

    const spanW = span.getBoundingClientRect().width; // width of ONE copy
    setDuration(spanW / speed);                       // seconds = px / (px/s)
  }, [text, speed]);

  return (
    <div
        ref={wrapperRef}
        className="w-full overflow-hidden pointer-events-none z-10 pb-6 pt-2"
        >
        <style>
            {`
            @keyframes marquee {
                from { transform: translateX(0); }
                to   { transform: translateX(-50%); }
            }
            .marquee {
                display: inline-flex;
                white-space: nowrap;
                animation: marquee linear infinite;
            }

            @keyframes glitchy {
                0%   { transform: translateX(0); opacity: 1; }
                20%  { transform: translateX(3px); }
                40%  { transform: translateX(-3px); opacity: 0.2; }
                60%  { transform: translateX(2px); }
                80%  { transform: translateX(-2px); opacity: 1; }
                100% { transform: translateX(0); }
            }

            .glitchy {
                animation: glitchy 0.1s infinite;
                text-shadow:
                2px 0 #00f,
                -2px 0 #0ff,
                0 2px #f0f,
                0 -2px #ff0;
            }
            `}
        </style>

        <p
            ref={bannerRef}
            className="marquee font-normal leading-none m-0 p-0 select-none"
            style={{
            fontFamily: "'Press Start 2P', monospace",
            animationDuration: `${duration}s`,
            }}
        >
            {/* Two copies, each with glitchy span */}
            <span className="glitchy mr-8" style={{ color }}>{text}&nbsp;&nbsp;&nbsp;</span>
            <span className="glitchy mr-8" style={{ color }} aria-hidden="true">
            {text}&nbsp;&nbsp;&nbsp;
            </span>
        </p>
        </div>
  );
}