import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

const IMAGE = "/bear-developyy.png";

const BULLETS = [
  "SPEARHEAD PIXEL-PERFECT WEB DESIGN",
  "HIJACK RANKINGS WITH SEO",
  "FORGE CUSTOM SOFTWARE & WEB DEVELOPMENT",
  "COMMAND THE CLOUD WITH MANAGEMENT & APP DEV",
  "CRAFT ADDICTIVE MOBILE APPS",
  "SCULPT KNOCKOUT BRAND DESIGN",
  "ENFORCE IRON-CLAD INFOSEC",
  "ENGINEER HYPNOTIC UI/UX.",
];

const DOT_INTERVAL = 5000;
const MAX_DOTS = 8;

export default function WeDoSection() {
  const [dots, setDots] = useState(3);

  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => (d < MAX_DOTS ? d + 1 : d));
    }, DOT_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section class="flex w-full items-start gap-12 px-8 py-12 overflow-hidden">
      {/* Image */}
      <img
        src={IMAGE}
        alt="Bear holding DEVELOPYYY sign"
        class="max-h-[90vh] object-cover shrink-0"
      />

      {/* Right column */}
      <div class="flex flex-col h-[90vh] overflow-hidden max-w-4xl">
        {/* Heading */}
        <h2 class="aboreto-regular text-6xl leading-none text-white mb-10">
          <span class="block">WE</span>
          <span class="block">
            DO&nbsp;
            <span class="inline-flex flex-wrap relative top-[0.8rem]">
              {Array.from({ length: dots }).map((_, i) => (
                <span key={i} class={i === dots - 1 ? "blink" : ""}>•</span>
              ))}
            </span>
          </span>
        </h2>

        {/* Bullet wrapper with animation */}
        <div class="relative h-full overflow-hidden">
          <div class="scroll-track">
            {[...BULLETS, ...BULLETS].map((b, i) => (
              <div
                key={i}
                class="text-5xl mb-8 aboreto-regular text-gray-200 uppercase break-words"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}